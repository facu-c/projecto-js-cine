import Storage from "./storage.js";
import List from "./list.js";

export default function(){
    //Crear los objetos
    const storage = new Storage();
    const list = new List();
    //conseguir datos de peliculas
    let pelisStored = storage.getData();
    let pelisViewed = document.querySelectorAll('.peli-item');
    //recorrer peliculas mostradas
    pelisViewed.forEach(peli => {
        //seleccionar el boton editar
        let editBtn = peli.querySelector(".edit");
        //asignar un evento click
        editBtn.onclick = function(){
            //conseguir id de la pelicula editar
            const peliId = this.getAttribute("data-id");
            //quitar botones antiguos
            editBtn.remove();
            peli.querySelector(".delete").remove();

            //añadir html debajo de los botones
            let peliEditHtml = `
                <div class="edit_form">
                    <hr>
                    <h3 class="title">Editar Pelicula</h3>
                    <form>
                        <input type="text" class="edited_title" value=${peli.querySelector('.title').innerHTML} />
                        <textarea class="edited_description">${peli.querySelector(".description").innerHTML}</textarea>
                        <input type="submit" class="update" value="Actualizar"/>
                    </form>
                </div>
            `;
            peli.innerHTML += peliEditHtml;
            //seleccionar el boton de actualizar
            let updateBtn = peli.querySelector(".update");

            //Aplicar evento click
            updateBtn.onclick = function(e){
                e.preventDefault();

                //buscar el indice de la pelicula a actualizar
                let index = pelisStored.findIndex(peli => peli.id === parseInt(peliId));
                //Guardar objeto dentro de ese indice
                pelisStored[index] = {
                    id:parseInt(peliId),
                    title: peli.querySelector('.edited_title').value,
                    description: peli.querySelector('.edited_description').value,
                }
                //actualizar localStorage
                storage.save(pelisStored);
                //volver a mostrar el listados
                list.show(pelisStored);
                return false;
            }

        }

    })


}