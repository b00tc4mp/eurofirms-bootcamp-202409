fetch('http://localhost:8080/users/4qgujmazqgk/name', {
    method: 'GET',
    headers: {
        authorization: 'Basic 4qghhowdc64'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(boy => console.log(boy))
    .catch(error => console.error(error))