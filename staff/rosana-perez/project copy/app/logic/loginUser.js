import { validate, errors } from 'com'

const { SystemError } = errors

function loginUser(username, password) {
    validate.username(username)
    validate.password(password)

    return fetch(`${import.meta.env.VITE_API_URL}/users/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => {
            const status = response.status

            if (status === 200) {
                return response.json()
                    .then(token => {
                        sessionStorage.token = token
                    })
                    .catch(error => { throw new SystemError(error.message) })
            }


            return response.json()
                .then(body => {
                    const error = body.error
                    const message = body.message
                    const constructor = errors[error]

                    throw new constructor(message)
                })
                .catch(error => { throw new SystemError(error.message) })
        }).catch(error => { throw new SystemError(error.message) })
}

export default loginUser