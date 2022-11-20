
import { peticion } from './http.js';

// Funcion que elimina un archivo
export function deleteFile(url) {

    const formList = document.querySelectorAll('.form');
    
    formList.forEach(form => form.addEventListener('submit', async (e) => {
    
        e.preventDefault();
    
        const response = await peticion('../model/delete.php', new FormData(e.target));
        
        if(response.status == 200) {
    
            alert(response.$respuesta);
            window.location.href = url;
        }
    }));
}

