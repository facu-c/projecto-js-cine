import Storage from "./storage.js";
import List from "./list.js";


export default class Add{

    constructor(){

        //Crear objetos
        this.storage = new Storage();
        this.list = new List();
        //Conseguir elemento del dom a utilizar
        this.titleField = document.querySelector('#title');
        this.descriptionField = document.querySelector('#description');
        this.saveBtn = document.querySelector('#save');
    }

    peliSave(){
        this.saveBtn.onclick = (e) =>{

            //conseguir datos actualizados 
            let pelis = this.storage.getData();
            let lastId = this.storage.getLastId();
            console.log(pelis, lastId);

            e.preventDefault();
            //Datos a guardar
            let title = this.titleField.value;
            let description = this.descriptionField.value;

            
            //Validacion
            if(title !== "" || description !== ""){

                //Crear objeto a guardar
                let peli = {
                    id: lastId++,
                    title,
                    description
                };

                //añadir al array de objetos
                pelis.push(peli);

                //Guardar en el local storage
                this.storage.save(pelis);    
                //Actualizar el listado
                this.list.show(pelis);
            }else{
                alert("Todos los campos son obligatorios");
            }
            return false;
        }
    }
}