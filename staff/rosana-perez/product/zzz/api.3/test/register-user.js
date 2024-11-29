fetch('http://localhost:8080/users',  {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"name": "Wendy Darling", "email": "wendy@darling.com", "username": "wendydarling", "password": "123123123"}'
})
.then(response => {console.log(response.status)})
.catch(error => console.error(error))