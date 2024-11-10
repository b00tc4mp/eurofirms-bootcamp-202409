fetch('http://localhost:8080/users', { // con fetch llamas al servidor
    method: 'POST',
    headers: {
        'Content-Type': 'application/json' // propiedad y valor ,siempre comillas cuando hay -,para q no piense q es resta
    },
    body: '{"name":"Peter Pan","email":"peter@pan.com","username":"peterpan","password":"123123123"}' // datos de register user que luego aparecen reflejados en index.js
})
    .then(response => { //then y catch para encadenar promesas,las que funcionan con fetch
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))