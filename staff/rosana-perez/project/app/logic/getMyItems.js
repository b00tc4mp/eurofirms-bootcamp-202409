import { errors } from 'com'

const { SystemError } = errors

function getMyItems() {

    return fetch(`${import.meta.env.VITE_API_URL}/items/owner`, {
        method: 'GET',
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

export default getMyItems