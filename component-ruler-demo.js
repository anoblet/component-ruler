import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/lib/repeat.js';
import './ruler-component.js';

class RulerComponentDemo extends LitElement {
  static get properties() {
    return {
    }
  }

  _render(props) {
    return html`
      <ruler-component direction="horizontal" length="12" unit="in"></ruler-component>
      <ruler-component direction="vertical" length="12" unit="in"></ruler-component>
    `;
  }
}

window.customElements.define('ruler-component-demo', RulerComponentDemo);
