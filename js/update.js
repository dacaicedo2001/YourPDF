
import { peticion } from './http.js';

const list = document.getElementById('file_list');
const formData = document.querySelector('.form');

list.innerHTML = "<option value='seleccionar'>Seleccionar</option>";

(async function fileList() {

    const form = new FormData();
    form.append('id', localStorage.getItem('session_id'));
    const result = await peticion('../model/load.php', form);
    
    if(result.status == 200 && result.response.length > 0) {
        
        result.response.forEach(file => {

            list.innerHTML += `
                <option value='${file.id}'>${file.documento}</option>
            `;
        });
    }

    formData.addEventListener('submit', async (e) => {
        
        e.preventDefault();

        const archivo = e.target.children[1].value;

        if(list.value == 'seleccionar')
            alert('¿Que archivo desea reemplazar?');
        else if(archivo == '')
            alert("Seleccione el nuevo archivo");
        else if((archivo.substring(archivo.lastIndexOf("."))).toLowerCase() != '.pdf')
            alert("Solo se permiten archivos pdf");
        else {

            let newForm = new FormData(e.target);
            newForm.append('id', list.value);
            const result = await peticion('../model/update.php', newForm);
            
            if(result.status == 200) {

                alert(result.message);
                window.location.href = result.url;
            }
        }
    });
})();