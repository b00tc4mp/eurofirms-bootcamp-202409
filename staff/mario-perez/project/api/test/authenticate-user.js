fetch('http://localhost:8080/users/auth', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"username":"_peterpan","password":"123123123"}'
})
    .then(response => {
        console.log(response.status)

        return response.json()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))