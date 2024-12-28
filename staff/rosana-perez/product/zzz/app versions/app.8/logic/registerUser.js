//validaciones sincronas, es decir, en el mismo momento
function registerUser(name, email, username, password) {
    if (typeof name !== 'string') throw new Error('invalid name')
    if (name.length < 4) throw new Error('invalid name length')

    if (typeof email !== 'string') throw new Error('invalid email')
    if (email.length < 6) throw new Error('invalid mail length')
    if (!email.includes('@')) throw new Error('invalidad email format')
    if (!email.includes('.')) throw new Error('invalid email format')
    const indexOfAt = email.indexOf('@')
    const indexOfDot = email.indexOf('.')
    if (indexOfDot < indexOfAt) throw new Error('invalid email format')
    //TODO add more rules form email validation (position of @ and .)

    if (typeof username !== 'string') throw new Error('invalid username')
    if (username.length < 4) throw Error('invalid username length')

    if (typeof password !== 'string') throw new Error('invalid password')
    if (password.length < 8) throw new Error('invalid password length')

    return fetch('http://localhost:8080/users',  {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({name, email, username, password})
        })

        .catch(error => { throw new Error(error.message) }) // fetch error -> view of communication errors
        .then(response => {
            const status = response.status

            if(status === 201) return

            return response.json() // convierte la respuesta de la api en objeto json
                .then (body => {
                const error = body.error
                const message = body.message

                throw new Error(message)
            })  

        })
}
