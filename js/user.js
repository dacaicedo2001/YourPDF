
if(localStorage.getItem('session')) {

    const userName = document.getElementById('user');
    userName.innerHTML = `<p>${ localStorage.getItem('user_name') }</p>`;
}
else window.location.href = "../index.html";