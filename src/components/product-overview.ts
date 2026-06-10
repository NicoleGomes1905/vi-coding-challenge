import { LitElement, css, html, type PropertyValues } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'
import { PokemonService, type Pokemon } from '../services/pokemon-service'
import './product-card'

type Theme = 'light' | 'dark'

@customElement('product-overview')
export class ProductOverview extends LitElement {

  @property({ type: String })
  headline = ''

  @state()
  pokemons: Pokemon[] = []

  @state()
  activeFilters: string[] = []

  @state()
  allTypes: string[] = []

  @state()
  isLoading = false

  @property({ type: String, reflect: true })
  theme: Theme = 'light'

  @state()
  errorMessage = ''

  @state()
  currentPage = 1

  @state()
  totalProducts = 0

  @property({ type: Number, attribute: 'page-size' })
  pageSize = 12

  private previousDocumentTheme: string | undefined
  private hasAppliedDocumentTheme = false
  private pokemonService = new PokemonService()
  private latestRequestId = 0

  connectedCallback() {
    super.connectedCallback()
    this.applyDocumentTheme()
    this.fetchTypes()
    this.fetchPokemons()
  }

  disconnectedCallback() {
    this.restoreDocumentTheme()
    super.disconnectedCallback()
  }

  async fetchPokemons() {
    const requestId = ++this.latestRequestId
    this.isLoading = true
    this.errorMessage = ''

    try {
      const { pokemons, total } = await this.pokemonService.getPage({
        page: this.currentPage,
        pageSize: this.itemsPerPage,
        filters: this.activeFilters
      })

      if (requestId !== this.latestRequestId) return

      this.totalProducts = total
      this.pokemons = pokemons
    } catch {
      if (requestId === this.latestRequestId) {
        this.errorMessage = 'We could not load the products right now. Please try again later.'
        this.pokemons = []
        this.totalProducts = 0
      }
    } finally {
      if (requestId === this.latestRequestId) {
        this.isLoading = false
      }
    }
  }

  async fetchTypes() {
    try {
      this.allTypes = await this.pokemonService.getTypes()
      this.pokemons = this.pokemonService.hydrateKnownTypes(this.pokemons)
    } catch {
      this.allTypes = []
    }
  }

  private updatePokemonImage(apiUrl: string, imageUrl: string) {
    const updatePokemon = (pokemon: Pokemon) =>
      pokemon.apiUrl === apiUrl ? { ...pokemon, imageUrl } : pokemon

    this.pokemons = this.pokemons.map(updatePokemon)
  }

  async handlePokemonImageError(pokemon: Pokemon) {
    const imageUrl = await this.pokemonService.resolveImageFallback(pokemon)
    this.updatePokemonImage(pokemon.apiUrl, imageUrl)
  }

  toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark'
  }

  get itemsPerPage() {
    return Math.max(1, this.pageSize)
  }

  get totalPages() {
    return Math.max(1, Math.ceil(this.totalProducts / this.itemsPerPage))
  }

  get paginatedPokemons() {
    return this.pokemons
  }

  toggleFilter(type: string) {
    if (this.activeFilters.includes(type)) {
      this.activeFilters = this.activeFilters.filter(f => f !== type)
    } else {
      this.activeFilters = [...this.activeFilters, type]
    }

    this.currentPage = 1
    this.fetchPokemons()
  }

  changePage(page: number) {
    const nextPage = Math.min(Math.max(page, 1), this.totalPages)

    if (this.isLoading || nextPage === this.currentPage) return

    this.currentPage = nextPage
    this.fetchPokemons()
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('theme')) {
      this.applyDocumentTheme()
    }

    if (changedProperties.has('pageSize') && changedProperties.get('pageSize') !== undefined) {
      this.currentPage = 1
      this.fetchPokemons()
    }
  }

  private renderPagination() {
    if (this.errorMessage || this.totalProducts <= this.itemsPerPage) return ''

    const pages = this.getVisiblePages()

    return html`
      <nav class="pagination" aria-label="Product pagination">
        <button
          type="button"
          class="pagination-button"
          ?disabled=${this.isLoading || this.currentPage === 1}
          @click=${() => this.changePage(this.currentPage - 1)}
        >
          Previous
        </button>

        <div class="pagination-pages">
          ${pages.map(page => html`
            <button
              type="button"
              class="pagination-page ${page === this.currentPage ? 'active' : ''}"
              aria-label=${`Go to page ${page}`}
              aria-current=${page === this.currentPage ? 'page' : 'false'}
              ?disabled=${this.isLoading || page === this.currentPage}
              @click=${() => this.changePage(page)}
            >
              ${page}
            </button>
          `)}
        </div>

        <button
          type="button"
          class="pagination-button"
          ?disabled=${this.isLoading || this.currentPage === this.totalPages}
          @click=${() => this.changePage(this.currentPage + 1)}
        >
          Next
        </button>
      </nav>
    `
  }

  private getVisiblePages() {
    const visiblePageCount = 5
    const startPage = Math.min(
      this.currentPage,
      Math.max(1, this.totalPages - visiblePageCount + 1)
    )
    const endPage = Math.min(this.totalPages, startPage + visiblePageCount - 1)

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    )
  }

  private applyDocumentTheme() {
    const root = document.documentElement

    if (!this.hasAppliedDocumentTheme) {
      this.previousDocumentTheme = root.dataset.theme
      this.hasAppliedDocumentTheme = true
    }

    root.dataset.theme = this.theme
    this.dispatchEvent(new CustomEvent('theme-change', {
      bubbles: true,
      composed: true,
      detail: { theme: this.theme }
    }))
  }

  private restoreDocumentTheme() {
    const root = document.documentElement

    if (!this.hasAppliedDocumentTheme || root.dataset.theme !== this.theme) return

    if (this.previousDocumentTheme) {
      root.dataset.theme = this.previousDocumentTheme
    } else {
      delete root.dataset.theme
    }
  }

  render() {
    return html`
      <div class="wrapper">

        <div class="header">
          ${this.headline ? html`<h1>${this.headline}</h1>` : ''}
          <button
            class="theme-toggle"
            type="button"
            role="switch"
            aria-label="Toggle dark theme"
            aria-checked=${this.theme === 'dark'}
            @click=${() => this.toggleTheme()}
          >
            <span class="toggle-track">
              <span class="toggle-thumb"></span>
            </span>
            <span class="toggle-label">${this.theme === 'dark' ? 'Dark' : 'Light'}</span>
          </button>
        </div>

        <div class="layout">

          <aside class="filters">
            <strong>Filter</strong>
            <p>Type</p>
            ${this.allTypes.map(type => html`
              <label>
                <input
                  type="checkbox"
                  @change=${() => this.toggleFilter(type)}
                  ?checked=${this.activeFilters.includes(type)}
                />
                <span class="type-dot ${type}"></span>
                ${type}
              </label>
            `)}
          </aside>

          <section class="products" aria-live="polite">
            <div class="grid">
              ${this.isLoading
                ? html`<p>Loading...</p>`
                : this.errorMessage
                  ? html`<p class="error-message">${this.errorMessage}</p>`
                  : this.pokemons.length === 0
                    ? html`<p class="error-message">No products match the selected filters.</p>`
                    : this.paginatedPokemons.map(p => html`
                      <product-card
                        .pokemonId=${p.id}
                        .name=${p.name}
                        .imageUrl=${p.imageUrl}
                        .pokemonTypes=${p.types}
                        .detailUrl=${p.detailUrl}
                        @pokemon-image-error=${() => this.handlePokemonImageError(p)}
                      ></product-card>
                    `)
              }
            </div>

            ${this.renderPagination()}
          </section>

        </div>

      </div>
    `
  }

  static styles = css`
    :host {
      display: block;
      width: min(100%, 1126px);
      min-height: 100svh;
      padding: 24px;
      box-sizing: border-box;
      background: var(--page-background, #ffffff);
      color: var(--text-color, #333);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      transition:
        background-color 180ms ease,
        color 180ms ease;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
      gap: 16px;
    }

    h1 { font-size: 24px; margin: 0; }

    .theme-toggle {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 4px 10px 4px 4px;
      border-radius: 99px;
      border: 1px solid var(--surface-border, #ddd);
      cursor: pointer;
      background: var(--surface-background, #fff);
      color: var(--text-color, #333);
      font-size: 14px;
      font-weight: 600;
      transition:
        background-color 180ms ease,
        border-color 180ms ease,
        color 180ms ease,
        box-shadow 180ms ease;
    }

    .theme-toggle:hover {
      box-shadow: 0 8px 20px rgb(15 23 42 / 12%);
    }

    .theme-toggle:focus-visible,
    .pagination-button:focus-visible,
    .pagination-page:focus-visible,
    input:focus-visible {
      outline: 3px solid var(--focus-ring-color, #6890f0);
      outline-offset: 3px;
    }

    .toggle-track {
      width: 42px;
      height: 24px;
      border-radius: 99px;
      padding: 2px;
      box-sizing: border-box;
      background: #d8dde6;
      transition: background-color 180ms ease;
    }

    .toggle-thumb {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #ffffff;
      box-shadow: 0 2px 6px rgb(15 23 42 / 25%);
      transform: translateX(0);
      transition: transform 180ms ease;
    }

    :host([theme='dark']) .toggle-track {
      background: #6890f0;
    }

    :host([theme='dark']) .toggle-thumb {
      transform: translateX(18px);
    }

    .layout { display: flex; gap: 24px; }

    .products {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 20px;
    }

    .filters {
      min-width: 140px;
      border: 1px solid var(--surface-border, #ddd);
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      height: fit-content;
      border-radius: 8px;
      background: var(--surface-background, #fff);
      transition:
        background-color 180ms ease,
        border-color 180ms ease;
    }

    .filters p { margin: 0; font-weight: bold; }

    label {
      display: flex;
      align-items: center;
      gap: 6px;
      text-transform: capitalize;
      cursor: pointer;
    }

    input {
      accent-color: var(--focus-ring-color, #6890f0);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      align-content: start;
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      flex-wrap: wrap;
    }

    .pagination-pages {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .pagination-button,
    .pagination-page {
      min-height: 36px;
      border: 1px solid var(--surface-border, #ddd);
      border-radius: 999px;
      background: var(--surface-background, #fff);
      color: var(--text-color, #333);
      cursor: pointer;
      font: inherit;
      font-size: 14px;
      transition:
        background-color 180ms ease,
        border-color 180ms ease,
        color 180ms ease,
        transform 180ms ease;
    }

    .pagination-button {
      padding: 0 14px;
    }

    .pagination-page {
      width: 36px;
      padding: 0;
    }

    .pagination-button:hover:not(:disabled),
    .pagination-page:hover {
      transform: translateY(-1px);
      border-color: var(--focus-ring-color, #6890f0);
    }

    .pagination-page.active {
      background: var(--focus-ring-color, #6890f0);
      border-color: var(--focus-ring-color, #6890f0);
      color: #ffffff;
      font-weight: 700;
    }

    .pagination-button:disabled,
    .pagination-page:disabled {
      cursor: not-allowed;
      opacity: 0.45;
    }

    .pagination-page.active:disabled {
      opacity: 1;
    }

    .wrapper { min-height: calc(100svh - 48px); }

    .type-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: inline-block;
      background: #ccc;
    }

    .error-message {
      grid-column: 1 / -1;
      margin: 0;
      color: var(--muted-text-color, #7a8491);
    }

    .type-tag {
      padding: 4px 12px;
      border-radius: 99px;
      font-size: 12px;
      color: white;
      text-transform: capitalize;
    }

    @media (max-width: 760px) {
      :host {
        padding: 16px;
      }

      .header {
        align-items: flex-start;
      }

      .layout {
        flex-direction: column;
      }

      .filters {
        width: 100%;
        box-sizing: border-box;
      }

      .grid {
        grid-template-columns: repeat(auto-fit, minmax(132px, 1fr));
      }

      .pagination {
        justify-content: stretch;
      }

      .pagination-button {
        flex: 1;
      }
    }

    .grass    { background: #78c850; }
    .poison   { background: #a040a0; }
    .fire     { background: #f08030; }
    .water    { background: #6890f0; }
    .normal   { background: #a8a878; }
    .flying   { background: #98d8d8; }
    .bug      { background: #a8b820; }
    .electric { background: #f8d030; }
    .ground   { background: #e0c068; }
    .fairy    { background: #ee99ac; }
    .psychic  { background: #f85888; }
    .rock     { background: #b8a038; }
    .ice      { background: #98d8d8; }
    .dragon   { background: #7038f8; }
    .ghost    { background: #705898; }
    .dark     { background: #705848; }
    .steel    { background: #b8b8d0; }
    .fighting { background: #c03028; }
  `
}
