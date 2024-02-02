import deleteOfList from "./delete.js";
import edit from "./edit.js";


export default class List{
    constructor(){
        //seleccionar
        this.content = document.querySelector('#content');

    }

    peliTemplate(peli){
        return `<article id="peli-${peli.id}" class="peli-item">
            <h3 class="title">${peli.title}</h3>
            <p class="description">
                ${peli.description}
            </p>
            <button class="edit" data-id="${peli.id}">Editar</button>
            <button class="delete" data-id="${peli.id}">Borrar</button>
        </article>
        `;
    }

    show(pelis){
        //vacia dom del contenedor principal
        this.content.innerHTML = "";

        //Recorrer y mostrar todos los objetos/peliculas del localstorage
        pelis.forEach(peli => {
            this.content.innerHTML += this.peliTemplate(peli);
        });

        //funcionalidad borrar
        deleteOfList();

        //funcionalidad edicion
        edit();
    }
}