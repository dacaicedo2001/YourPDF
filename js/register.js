
import { peticion } from './http.js';

document.querySelector('.form').addEventListener('submit', async (e) => {
    
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const usuario = document.getElementById('usuario').value.trim();
    const clave = document.getElementById('clave').value.trim();

    if(nombre == '' || apellido == '' || usuario == '' || clave == '') {
        alert('Complete todos los campos');
    }
    else {
        
        const response = await peticion('../model/RegisterUser.php', new FormData(e.target));
        
        if(response.status == 200) {

            alert(response.message);
            window.location.href = response.url;
        }
        else alert(response.message);
    }
});