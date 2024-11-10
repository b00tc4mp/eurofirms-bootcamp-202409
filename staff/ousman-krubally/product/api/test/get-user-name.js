fetch('htto://localhost:8080/users/4qghhowdc64/name', {
    method: 'GET',
    headers: {
        authorization: 'basic 4qghhowdc64'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(boy => console.log(body))
    .catch(error => console.error(error))