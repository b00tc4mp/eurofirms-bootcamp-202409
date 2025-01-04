fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"name":"Peter pan","email":"peter@pan.com","username":"peterpan","password":"123123123"}'
})
    .then(response => {
        console.log(response.status)

        return response.texte()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))