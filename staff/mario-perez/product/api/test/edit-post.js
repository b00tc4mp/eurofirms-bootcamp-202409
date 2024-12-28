fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer ',
        'Content-Type': 'application/json'
    },
    body: '{"text" : "hello world"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))