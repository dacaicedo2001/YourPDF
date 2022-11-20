
const menu = document.getElementById('menu');

// Desplieque de menu de usuario
function visible() {
    if(menu.classList.contains('visible')) menu.classList.remove('visible');
    else menu.classList.add('visible');
}

document.querySelector('.arrow').addEventListener('click', visible);

document.querySelector('.logout').addEventListener('submit', (e) => {
    
    e.preventDefault();
    localStorage.clear();
    window.location.href = "../index.html";
});

const hide = () => { if(menu.classList.contains('visible')) menu.classList.remove('visible'); }
document.querySelector('main').addEventListener('click', hide);
document.querySelector('footer').addEventListener('click', hide);
