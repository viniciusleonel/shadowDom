class TitutloPorComponent extends HTMLElement {
    constructor(){
        super();

        // Criando um component fixo no Html
        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = `
        <h1 class="teste">Component Fixo HTML</h1>
        `
    }
}

customElements.define("titulo-fixo", TitutloPorComponent);