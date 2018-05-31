import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat.js';
import './component-ruler.js';

class ComponentRulerDemo extends LitElement {
  static get properties() {
    return {
    }
  }

  _render(props) {
    return html`
      <component-ruler direction="horizontal" length="12" unit="in"></component-ruler>
      <component-ruler direction="vertical" length="12" unit="in"></component-ruler>
    `;
  }
}

window.customElements.define('component-ruler-demo', ComponentRulerDemo);
