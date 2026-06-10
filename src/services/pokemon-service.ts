export type PokemonType = {
  slot: number,
  type: {
    name: string,
    url: string
  }
}

export type Pokemon = {
  id: number,
  name: string,
  imageUrl: string,
  types: PokemonType[],
  detailUrl: string,
  apiUrl: string
}

type PokemonListItem = {
  name: string,
  url: string
}

type PokemonPage = {
  pokemons: Pokemon[],
  total: number
}

type PageParams = {
  page: number,
  pageSize: number,
  filters: string[]
}

const HIDDEN_TYPES = ['unknown', 'shadow', 'stellar']

export class PokemonService {
  private pageCache = new Map<string, PokemonPage>()
  private pageRequestCache = new Map<string, Promise<PokemonPage>>()
  private typeListCache = new Map<string, PokemonListItem[]>()
  private pokemonTypesByName = new Map<string, PokemonType[]>()
  private brokenSpriteUrlsByPokemon = new Map<string, Set<string>>()

  async getTypes() {
    const response = await fetch('https://pokeapi.co/api/v2/type')
    const data = await response.json()
    const visibleTypes = (data.results as PokemonListItem[])
      .filter(type => !HIDDEN_TYPES.includes(type.name))

    await Promise.allSettled(
      visibleTypes.map(type => this.fetchPokemonListByType(type.name, type.url))
    )

    return visibleTypes.map(type => type.name)
  }

  async getPage(params: PageParams) {
    return this.fetchPageData(params)
  }

  hydrateKnownTypes(pokemons: Pokemon[]) {
    return pokemons.map(pokemon => this.withKnownTypes(pokemon))
  }

  async resolveImageFallback(pokemon: Pokemon) {
    if (!pokemon.imageUrl) return ''

    const brokenUrls = this.brokenSpriteUrlsByPokemon.get(pokemon.apiUrl) ?? new Set<string>()
    brokenUrls.add(pokemon.imageUrl)
    this.brokenSpriteUrlsByPokemon.set(pokemon.apiUrl, brokenUrls)

    try {
      const response = await fetch(pokemon.apiUrl)
      const data = await response.json()
      const imageUrl = this.getBestSpriteUrl(data.sprites, [...brokenUrls])

      this.updatePokemonImage(pokemon.apiUrl, imageUrl)

      return imageUrl
    } catch {
      this.updatePokemonImage(pokemon.apiUrl, '')

      return ''
    }
  }

  private async fetchPageData(params: PageParams) {
    const cacheKey = this.getPageCacheKey(params)
    const cachedPage = this.pageCache.get(cacheKey)
    const pendingPage = this.pageRequestCache.get(cacheKey)

    if (cachedPage) return cachedPage
    if (pendingPage) return pendingPage

    const request = this.fetchPageList(params)
      .then(async ({ items, total }) => {
        const pokemons = items.map(item => this.createPokemonSummary(item))
        const pageData = { pokemons, total }

        this.pageCache.set(cacheKey, pageData)
        this.pageRequestCache.delete(cacheKey)

        return pageData
      })
      .catch(error => {
        this.pageRequestCache.delete(cacheKey)
        throw error
      })

    this.pageRequestCache.set(cacheKey, request)

    return request
  }

  private async fetchPageList({ page, pageSize, filters }: PageParams) {
    const offset = (page - 1) * pageSize

    if (filters.length === 0) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${pageSize}&offset=${offset}`
      )
      const data = await response.json()

      return {
        items: data.results as PokemonListItem[],
        total: data.count as number
      }
    }

    const filteredItems = await this.fetchFilteredPokemonList(filters)

    return {
      items: filteredItems.slice(offset, offset + pageSize),
      total: filteredItems.length
    }
  }

  private async fetchFilteredPokemonList(filters: string[]) {
    const lists = await Promise.all(
      filters.map(type => this.fetchPokemonListByType(type))
    )
    const uniqueItems = new Map<string, PokemonListItem>()

    lists.flat().forEach(item => uniqueItems.set(item.name, item))

    return [...uniqueItems.values()].sort((a, b) =>
      this.getPokemonIdFromUrl(a.url) - this.getPokemonIdFromUrl(b.url)
    )
  }

  private async fetchPokemonListByType(type: string, typeUrl?: string) {
    const cachedList = this.typeListCache.get(type)

    if (cachedList) return cachedList

    const resolvedTypeUrl = typeUrl ?? `https://pokeapi.co/api/v2/type/${type}`
    const response = await fetch(resolvedTypeUrl)
    const data = await response.json()
    const list = data.pokemon.map((entry: { pokemon: PokemonListItem, slot: number }) => {
      const knownTypes = this.pokemonTypesByName.get(entry.pokemon.name) ?? []
      const nextTypes = [
        ...knownTypes.filter(knownType => knownType.type.name !== data.name),
        { slot: entry.slot, type: { name: data.name, url: resolvedTypeUrl } }
      ].sort((a, b) => a.slot - b.slot)

      this.pokemonTypesByName.set(entry.pokemon.name, nextTypes)

      return entry.pokemon
    })

    this.typeListCache.set(type, list)

    return list
  }

  private createPokemonSummary(item: PokemonListItem) {
    const id = this.getPokemonIdFromUrl(item.url)

    return {
      id,
      name: item.name,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
      types: this.pokemonTypesByName.get(item.name) ?? [],
      detailUrl: this.getDetailUrl(item.name),
      apiUrl: item.url
    }
  }

  private getBestSpriteUrl(sprites: Record<string, any>, brokenUrls: string[] = []) {
    const candidates = [
      sprites.front_default,
      sprites.other?.home?.front_default,
      sprites.other?.['official-artwork']?.front_default,
      sprites.other?.showdown?.front_default,
      sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default
    ]

    return candidates.find(candidate => candidate && !brokenUrls.includes(candidate)) ?? ''
  }

  private updatePokemonImage(apiUrl: string, imageUrl: string) {
    const updatePokemon = (pokemon: Pokemon) =>
      pokemon.apiUrl === apiUrl ? { ...pokemon, imageUrl } : pokemon

    this.pageCache.forEach((page, key) => {
      this.pageCache.set(key, {
        ...page,
        pokemons: page.pokemons.map(updatePokemon)
      })
    })

  }

  private withKnownTypes(pokemon: Pokemon) {
    const knownTypes = this.pokemonTypesByName.get(pokemon.name)

    return knownTypes ? { ...pokemon, types: knownTypes } : pokemon
  }

  private getPokemonIdFromUrl(url: string) {
    return Number(url.split('/').filter(Boolean).at(-1) ?? 0)
  }

  private getDetailUrl(name: string) {
    return `https://www.pokemon.com/us/pokedex/${name}`
  }

  private getPageCacheKey({ page, pageSize, filters }: PageParams) {
    const filterKey = [...filters].sort().join(',')

    return `${filterKey || 'all'}:${pageSize}:${page}`
  }
}
