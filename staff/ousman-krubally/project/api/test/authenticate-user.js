fetch('http://localhost:8082/users/auth', {
    method: 'POST',
    headers: {
        'content-Type': 'application/json'
    },
    body: '{"username":"piterpan","password":"123123123"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))