
import { peticion } from './http.js';

document.querySelector('.form').addEventListener('submit', async (e) => {
    
    e.preventDefault();

    const usuario = document.getElementById('usuario').value.trim();
    const clave = document.getElementById('clave').value.trim();

    if(usuario == '' || clave == '') {
        alert('Complete todos los campos');
    }
    else {
        
        const response = await peticion('model/login.php', new FormData(e.target));
        
        if(response.status == 200) {

            localStorage.setItem('session', response.session);
            localStorage.setItem('session_id', response.id);
            localStorage.setItem('user_name', response.nombre);
            window.location.href = response.url;
        }
        else alert(response.message);
    }
});