import Storage from "./storage.js";
import List from "./list.js";

export default function(){
    //crear objetos
    const storage = new Storage();
    const list = new List();

    //conseguir elementos dom
    let content = document.querySelector('#content');
    let searchBtn = document.querySelector('#search');

    //aplicar un evento sobre el form de busqueda 
    searchBtn.onclick = (e) => {
        e.preventDefault();
        //conseguir texto introducido en el formulario
        let wanted = document.querySelector('#search_field').value;


        //conseguir un listado actualizado
        let pelisStored = storage.getData();

        //aplicar filtro
        const newPelis = pelisStored.filter(peli => {
            return peli.title.toLowerCase().includes(wanted.toLowerCase())
        })

        //mostrar el listado de coincidencia
        if(newPelis.length > 0){
            list.show(newPelis);
        }else{
            content.innerHTML = "<div style='text-align:center'> <h3>No hay coincidencias</h3> </div>"
        }
        
        return false;
    
    };

}