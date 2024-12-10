fetch('http://localhost:8081/users/auth', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"username": "registertest", "password": "123123123"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))