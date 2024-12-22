fetch('http://localhost:8080/users/4qghhowdc64/name', {
    method: 'GET',
    headers: {
        Authorization: 'Basic 4qghhowdc64'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))
    