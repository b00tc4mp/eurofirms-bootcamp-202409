fetch('http://localhost:8080/posts', {
    method: 'GET',
    headers: {
        authorization: 'basic 4qghhowdc64'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))