
export async function peticion(url, datos) {

    const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: datos
    };
    const http = await fetch(url, options);
    const response = await http.json();
    return response;
}