//Llamar de manera asíncrona al servidor
//Antes, levantar la API

fetch('http://localhost8080/users'), {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"name": "Peter Pan" , "email":"trdfhg@jnhg.com", "username":"grg", "password": "123123"}'
}
    .then(response => console.log(response.status)) // ejecuta el camino feliz: una promesa consistente en un callback
    .catch(error => console.error(error)) //camino infeliz, fallo en la comunicación