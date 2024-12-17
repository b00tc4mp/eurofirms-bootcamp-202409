function loginUser(username, password) {
    if (typeof username !== 'string')
        throw new Error('Usuario incorrecto')
    if (username.length < 4)
        throw new Error('Usuario incorrecto')

    if (typeof password !== 'string')
        throw new Error('Contraseña incorrecta')
    if (password.length < 8)
        throw new Error('Contraseña incorrecta')

    return fetch('http://localhost:8080/users/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .catch(error => { throw new Error(error.message) })
        .then(response => {
            const status = response.status

            if (status === 200)
                return response.json()
                    .then(userId => {
                        sessionStorage.userId = userId
                    })

            return response.json()
                .then(body => {
                    const error = body.error
                    const message = body.message

                    throw new Error(message)
                })
        })




}