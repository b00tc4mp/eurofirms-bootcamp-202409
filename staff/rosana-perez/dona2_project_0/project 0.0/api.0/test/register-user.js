fetch('http://localhost:8081/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"name": "UserOne", "location": "Santander", "email": "user@one.com", "username": "userone", "password": "123123123"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))