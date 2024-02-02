import Add from "./modules/add.js";
import List from "./modules/list.js";
import Storage from "./modules/storage.js";
import search from "./modules/search.js";

export default class App{
    constructor(){
        //Inicialiazar propiedades
        this.add = new Add();
        this.list = new List();
        this.storage = new Storage();
    }
    load(){
        //añadir pelicula - listar - buscar
        console.log("Iniciado");     
        //añadir pelicula
        this.add.peliSave();
        //conseguir array objetos 
        const pelis = this.storage.getData();
        //Listar pelis
        this.list.show(pelis);

        //Buscar peliculas
        search();
    }
}