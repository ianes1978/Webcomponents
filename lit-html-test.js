import {html,render} from './node_modules/lit-html/lit-html.js';

let variabile = " pippo";

let prova = html`ciao ${variabile}`

render(prova,document.getElementById("test1"))

variabile = " lit-html";
prova = html`ciao ${variabile}`

render(prova,document.getElementById("test1"))