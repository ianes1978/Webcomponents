import {LitElement, html} from 'lit-element'



class Esempio3 extends LitElement {
    static get properties() {
        return {
          nome: { type: String },
        };
      }

  render() {
    return html`
     ciao ${this.nome}
    `
  }
}

window.customElements.define('my-esempio3', Esempio3);