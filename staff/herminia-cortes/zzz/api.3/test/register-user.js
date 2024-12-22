feach('http://localhost:8080/users', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: '{"name":"Peter Pan","email":"peter@pan.com","username":"peterpan":"123123123"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))
