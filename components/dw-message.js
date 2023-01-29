 import { LitElement,html, render , css } from "lit";

class DWMessage extends LitElement{
    static styles =css`
    :host{
        display: block;
        border: 1px solid red;
        padding:10px
    }
    div{
        background-color :#fcc;
    }
    p{
        margin-bottom:0 
    }
    `
    render(){
        return html`<div>Este es un componente</div><p><b>Esto también va aquí</b></p>`; 
    }
}

customElements.define('dw-message', DWMessage);