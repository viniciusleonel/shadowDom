class CardNews extends HTMLElement {
    constructor(){
        super();

        // Cria um Shadow DOM
        const shadow = this.attachShadow({mode: "open"});
        // Chama o Html dentro do método build
        shadow.appendChild(this.build());
        // Chama o Css dentro do método styles
        shadow.appendChild(this.styles());
    }

    build(){
        // Cria elementos Html no DOM ( Div, span, a, p, img)
        const componentRoot = document.createElement("div");
        const cardLeft = document.createElement("div");
        const cardRight = document.createElement("div");
        const autor = document.createElement("span");
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");
        const newsImage = document.createElement("img");

        // Cria Classes para os elementos Html criados ( classe, nomeDaClasse )
        componentRoot.setAttribute("class", "card");
        cardLeft.setAttribute("class", "card__left");
        cardRight.setAttribute("class", "card__right");
        newsImage.setAttribute("class", "card__img");

        // Colocando conteúdo dentro das tags
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");
        newsContent.textContent = this.getAttribute("content");
        newsImage.src = this.getAttribute("photo") || "assets/default-profile.jpg";
        newsImage.alt = "Foto da noticia";

        // Coloca as Div's cards dentro da Div ComponentRoot
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        cardRight.appendChild(newsImage);

        return componentRoot;
    }

    styles(){
        const style = document.createElement("style");
        style.textContent=
        `
            .card {
                width: 60%;
                box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 1rem 0 2rem 0;
            }
            
            .card__left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0 .8rem 0 .8rem;
                
            }
            
            .card__left > span {
                font-weight: 400;
            }
            
            .card__left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: bold;
            }
            
            .card__left > p {
                color: rgb(70, 70, 70);
            }

            .card__right{
                display: flex;
                justify-content: flex-end;
            }

            .card__img{
                width: 15rem;
                hight: 15rem;
            }
        `
        return style;
    }
}

customElements.define("card-news", CardNews);