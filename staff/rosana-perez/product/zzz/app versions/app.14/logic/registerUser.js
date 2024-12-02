//validaciones sincronas, es decir, en el mismo momento

import { validate, errors } from 'com'

const { SystemError } = errors

function registerUser(name, email, username, password) {
    validate.name(name)
    validate.email(email)
    validate.username(username)
    validate.password(password)

    return fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, username, password })
    })

        .catch(error => { throw new SystemError(error.message) }) // fetch error -> view of communication errors
        .then(response => {
            const status = response.status

            if (status === 201) return

            return response.json() // convierte la respuesta de la api en objeto json
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const error = body.error
                    const message = body.message

                    const constructor = errors[error]

                    throw new constructor(message)
                })

        })
}

export default registerUser
