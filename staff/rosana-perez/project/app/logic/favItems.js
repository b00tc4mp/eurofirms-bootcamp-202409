import { errors } from 'com'

const { SystemError } = errors

import extractPayloadFromJwt from './helpers/extractPayloadFromJWT'



function favItems() {

    const payload = extractPayloadFromJwt(sessionStorage.token)
    const userId = payload.sub

    return fetch(`${import.meta.env.VITE_API_URL}/users/${userId}/favs`, {
        method: 'GET'
        ,
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {
            const status = response.status

            if (status === 200)
                return response.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(items => items)

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

export default favItems