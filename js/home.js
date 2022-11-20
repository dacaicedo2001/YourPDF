
import { peticion } from './http.js';
import { deleteFile } from './delete.js';

const content = document.querySelector('.card-content');

(async function main() {

    const form = new FormData();
    form.append('id', localStorage.getItem('session_id'));
    const result = await peticion('../model/firstEightFiles.php', form);
    
    if(result.response.length == 0) {

        content.innerHTML = "<h3>No hay resultados</h3>";
    }
    else {

        result.response.forEach(file => {
            content.innerHTML += `
            <div class="card">
                <div class="card-icon">
                    <i class="fa-solid fa-file-pdf icon"></i>
                </div>
                <a href='../upload/${file.documento}' target="_blank" class="link">${file.documento}</a>
                <hr>
                <div class="botones">
                    <a href="./update.html">editar</a>
                    <form method="post" class="form">
                        <input type="hidden" name="key_id" value="${file.id}">
                        <input type="submit" value="eliminar">
                    </form>
                </div>
            </div>
            `;
        });

        deleteFile("./home.html");
    }
})();
