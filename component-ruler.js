import { html, LitElement } from '@polymer/lit-element';
import { repeat } from 'lit-html/directives/repeat.js';

class ComponentRuler extends LitElement {
  static get properties() {
    return {
      direction: {
        type: String
      },
      length: {
        type: Number
      },
      unit: {
        type: String
      }
    }
  }

  constructor(props) {
    super(props);
    this.direction = 'horizontal';
    this.length = 12;
    this.unit = 'in';
  }

  getBlocks() {
    let blocks = [];
    for (let i = 0; i < this.length; i++) {
      blocks.push('Test');
    }
    return blocks;
  }

  _render(props) {
    return html`
      <style>
        :host {
          border 1px solid;
          box-sizing: border-box;
        }

        .container {
          /* display: grid; */
          display: flex;
        }
      
        :host .item {
          display: flex;
          box-sizing: border-box;
        }

        :host([direction="horizontal"]) {
          flex-direction: column;
        }

        :host([direction="horizontal"]) .item {
          justify-content: flex-end;
          border-right: 1px solid;
          padding-right: 16px;
          min-width: 1in;
          width: 1in;
        }

        :host([direction="vertical"]) {
          flex-direction: column;
        }

        :host([direction="vertical"]) .container {
          flex-direction: column;
          width: min-content;
        }    

        :host([direction="vertical"]) .item {
          align-items: flex-end;
          border-bottom: 1px solid;
          padding-bottom: 16px;
          height: 1in;
        }

        ul {
          margin: 0;
          padding: 0;
          display: grid;
        }
      
        li {
            border-bottom: 1px solid;
        }
      </style>
      <div class="container" style="grid-template-columns: repeat(auto-fit, minmax(0, 1${props.unit}));">
      ${repeat(this.getBlocks(), (block, index) => html`
      <div class="item">${index + 1}</div>
      `)}
      </div>
      `;
  }

  _renderBlocks() {

  }
}

window.customElements.define('component-ruler', ComponentRuler);
