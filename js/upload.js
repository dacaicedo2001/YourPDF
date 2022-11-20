
import { peticion } from './http.js';

document.querySelector('.form').addEventListener('submit', async (e) => {

    e.preventDefault();

    const archivo = document.getElementById('archivo').value;
    const extension = (archivo.substring(archivo.lastIndexOf("."))).toLowerCase();
    
    if(extension != '.pdf') alert('Solo se permiten archivos pdf');
    else {
        
        let form = new FormData(e.target);
        form.append('id', localStorage.getItem('session_id'));
        const response = await peticion('../model/upload.php', form);
        
        if(response.status == 200) {
            
            alert(response.message);
            window.location.href = response.url;
        }
    }
});