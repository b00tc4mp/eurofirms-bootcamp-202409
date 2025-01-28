import { errors } from 'com'

const { SystemError } = errors

function getItemsAsGuest() {

    return fetch(`${import.meta.env.VITE_API_URL}/items/guest`, {
        method: 'GET'
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

export default getItemsAsGuest