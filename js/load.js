
import { peticion } from './http.js';
import { deleteFile } from './delete.js';

const tabla = document.querySelector('.tbody');

// Funcion que carga los archivos del usuario
(async function loadFiles() {

    const form = new FormData();
    form.append('id', localStorage.getItem('session_id'));

    const result = await peticion('../model/load.php', form);
    
    if(result.response.length == 0) {
        tabla.innerHTML = "<h3>No hay resultados</h3>";
    }
    else {

        result.response.forEach(file => {
            tabla.innerHTML += `<tr>
                <td>${file.id}</td>
                <td><a href="../upload/${file.documento}" target="_blank">${file.documento}</a></td>
                <td class="acciones">
                    <a href="./update.html">editar</a>
                    <form method="post" class="form">
                        <input type="hidden" name="key_id" value="${file.id}">
                        <input type="submit" value="eliminar">
                    </form>
                </td>
            </tr>
            `;
        });
    
        deleteFile("./files.html");
    }
})();