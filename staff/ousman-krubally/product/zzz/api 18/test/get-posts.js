fetch('http://localhost:8080/posts', {
    method: 'GET',
    headers: {
        authorization: 'Basic 4qgujmazqgk'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))