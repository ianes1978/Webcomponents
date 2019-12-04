class Esempio1 extends HTMLElement {
    constructor() {
        super(); 
        console.log('constructed!');
        
        this.attributo = this.getAttribute('nome') ;
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.innerHTML=`<p style="color:red">ciao ${this.attributo}</p>`;
      
    }
    static get observedAttributes(){
        return ["nome"];
    }

    attributeChangedCallback(name, oldVal, newVal) {
        console.log(`Attribute: ${name} changed!`);
        
        this.attributo = this.getAttribute('nome') ;
        this._shadowRoot.innerHTML=`<p style="color:red">ciao ${this.attributo}</p>`;
    }

    connectedCallback() {
        console.log('connected!');
    }

    disconnectedCallback() {
        console.log('disconnected!');
    }



    adoptedCallback() {
        console.log('adopted!');
    }





}
window.customElements.define('my-esempio1', Esempio1);