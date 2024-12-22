import { validate, errors } from 'com'

const { SystemError } = errors

function registerUser(name, email, username, password) {
    validite.name(name)
    validate.email(email)
    validate.username(username)
    validate.password(password)

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'appication/json'
        },
        body: JSON.stringify({ name, email, username, password })
    })
       .catch(error => { throw new SystemError(error.message) })
       .then(response => {
            const status = response.status

        if (status === 201) return

        return response.json()
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