import Storage from "./storage.js";
import List from "./list.js";

export default function(){
    //Crear los objetos
    const storage = new Storage();
    const list = new List();

    //Datos de las peliculas disponibles
    let pelisStored = storage.getData();
    let pelisViewed = document.querySelectorAll(".peli-item");

    //Recorrer pelis mostradas
    pelisViewed.forEach(peli => {
        //capturar el boton
        let deleteBtn = peli.querySelector('.delete');
        //aplicar un evento
        deleteBtn.onclick = function(){
            //conseguir el id de la pelicula que quiero borrar
            const peliId = this.getAttribute('data-id');
            //filtrar el array para que elimine la que no quiero
            const newPeliStored = pelisStored.filter((peli)=> peli.id !== parseInt(peliId));

            //Actualizar datos en el localstorage
            storage.save(newPeliStored);
            //Volver a mostrar el listado
            list.show(newPeliStored);
        };
    });
}