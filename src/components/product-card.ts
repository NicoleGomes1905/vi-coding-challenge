import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

type PokemonType = {
  "slot": number,
  "type": {
    "name": string,
    "url": string
  }
}

@customElement('product-card')
export class ProductCard extends LitElement {

  @property({ type: Number })
  pokemonId = 0

  @property({ type: String })
  name = ''

  @property({ type: String })
  imageUrl = ''

  @property({ type: Array })
  pokemonTypes: PokemonType[] = []

  @property({ type: String })
  detailUrl = ''

  private handleImageError() {
    this.dispatchEvent(new CustomEvent('pokemon-image-error', {
      bubbles: true,
      composed: true
    }))
  }

  render(){
    return html`
    <a class="pokemon-card" href="${this.detailUrl}" target="_blank" rel="noopener noreferrer">
        <span class="pokemon-id">#${this.pokemonId}</span>
        ${this.imageUrl
          ? html`<img class="pokemon-image" src="${this.imageUrl}" alt="${this.name}" @error=${() => this.handleImageError()} />`
          : html`<div class="pokemon-image image-placeholder" aria-label=${`No image available for ${this.name}`}>?</div>`
        }
        <div class="more-info">
          <h2 class="pokemon-name">${this.name}</h2>
          <div class="pokemon-types">
            ${this.pokemonTypes.map(type => html`
              <span class="pokemon-type ${type.type.name}">${type.type.name}</span>
            `)}
          </div>
        </div>
    </a>
    `
  }

  static styles = css`
  :host {
      display: block;
    }

    .pokemon-card {
      display: flex;
      flex-direction: column;
      position: relative;
      border: 1px solid var(--surface-border, #ddd);
      border-radius: 8px;
      padding: 8px;
      min-height: 210px;
      box-sizing: border-box;
      background: var(--surface-background, #fff);
      text-decoration: none;
      color: var(--text-color, inherit);
      cursor: pointer;
      transition:
        background-color 180ms ease,
        border-color 180ms ease,
        transform 180ms ease,
        box-shadow 180ms ease;
    }

    .pokemon-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgb(15 23 42 / 12%);
    }

    .pokemon-card:focus-visible {
      outline: 3px solid var(--focus-ring-color, #6890f0);
      outline-offset: 3px;
    }

    .pokemon-id {
      position: absolute;
      top: 8px;
      right: 8px;
      font-size: 12px;
      color: var(--muted-text-color, #999);
    }

    .pokemon-image {
      width: 100%;
      height: 150px;
      object-fit: contain;
      flex: 0 0 150px;
    }

    .image-placeholder {
      display: grid;
      place-items: center;
      color: var(--muted-text-color, #999);
      font-size: 32px;
      font-weight: 700;
    }

    .more-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      margin-top: auto;
    }

    .pokemon-name {
      font-size: 14px;
      margin: 0;
      text-transform: capitalize;
      line-height: 1.2;
    }

    .pokemon-types {
      display: flex;
      gap: 4px;
      flex: 0 0 auto;
    }

    .pokemon-type {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      font-size: 0;
      background: #ccc;
    }

    .grass   { background: #78c850; }
    .poison  { background: #a040a0; }
    .fire    { background: #f08030; }
    .water   { background: #6890f0; }
    .normal  { background: #a8a878; }
    .flying  { background: #98d8d8; }
    .bug     { background: #a8b820; }
    .electric{ background: #f8d030; }
    .ground  { background: #e0c068; }
    .fairy   { background: #ee99ac; }
    .psychic { background: #f85888; }
    .rock    { background: #b8a038; }
    .ice     { background: #98d8d8; }
    .dragon  { background: #7038f8; }
    .ghost   { background: #705898; }
    .dark    { background: #705848; }
    .steel   { background: #b8b8d0; }
    .fighting{ background: #c03028; }
  `
  }
