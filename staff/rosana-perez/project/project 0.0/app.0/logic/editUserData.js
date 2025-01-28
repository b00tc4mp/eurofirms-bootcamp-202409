import { validate, errors } from 'com'

const { SystemError } = errors

import extractPayloadFromJwt from './helpers/extractPayloadFromJWT'

function editUserData(name, location, email, username, password) {
    validate.name(name)
    /* validate.location(location) */
    validate.email(email)
    validate.username(username)
    validate.password(password)

    const payload = extractPayloadFromJwt(sessionStorage.token)
    const userId = payload.sub

    return fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, location, email, username, password })
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {
            const status = response.status

            if (status === 204) return

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

export default editUserData