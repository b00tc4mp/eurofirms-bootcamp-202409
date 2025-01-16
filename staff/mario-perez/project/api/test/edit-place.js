fetch('http://localhost:8080/places/677ee28af6a244efd20ff5d6', {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer ',
        'Content-Type': 'application/json'
    },
    body: '{ }'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))