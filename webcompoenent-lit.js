import {html,render} from './node_modules/lit-html/lit-html.js';


class Esempio2 extends HTMLElement {
    constructor() {
        // always call super() first
        super(); 
        console.log('constructed!');
        this.attributo = this.getAttribute('nome') ;
        this.testHtml = html`<p style="color:red">ciao2  ${this.attributo}</p>`
        
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        // this._shadowRoot.innerHTML=`<p style="color:red">ciao</p>`;

        render(this.testHtml,this._shadowRoot)
      
    }
    static get observedAttributes(){
        return ["nome"];
    }

    connectedCallback() {
        console.log('connected!');
    }

    disconnectedCallback() {
        console.log('disconnected!');
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log(`Attribute: ${name} changed!`);
        this.attributo = this.getAttribute('nome') ;
        this.testHtml = html`<p style="color:red">ciao  ${this.attributo}</p>`
        render(this.testHtml,this._shadowRoot)
    }

    adoptedCallback() {
        console.log('adopted!');
    }





}
window.customElements.define('my-esempio2', Esempio2);