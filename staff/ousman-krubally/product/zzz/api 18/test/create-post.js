fetch('http://localhost:8080/posts', {
    method: 'POST',
    Headers: {
        Authorization: 'Basic 674a3fd9a081a9e0cded3a7a',
        'content-Type': 'application/json'
    },
    body: '{"image":"https://img.freepik.com/fotos-premium/personaje-anime-involucrado-codificacion-viaje-digital-al-mundo-programacion_893737-13068.jpg?w=360","text":"escribiendo codigo"}'
})
    .then(response => {
        console.log(response.status)

        return response.text
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))