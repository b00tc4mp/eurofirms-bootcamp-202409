import { validate, errors } from 'com'

const { SystemError } = errors

function registerUser(name, location, email, username, password) {
    validate.name(name)
    /* validate.location(location) */
    validate.email(email)
    validate.username(username)
    validate.password(password)

    return fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, location, email, username, password })
    })
        .then(response => {
            const status = response.status

            if (status === 201) return

            return response.json()
                .then(body => {
                    const error = body.error
                    const message = body.message

                    const constructor = errors[error]

                    throw new constructor(message)
                })
                .catch(error => { throw new SystemError(error.message) })
        })
        .catch(error => { throw new SystemError(error.message) })
}

export default registerUser