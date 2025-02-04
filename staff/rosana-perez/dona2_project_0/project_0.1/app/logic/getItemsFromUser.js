import { errors } from 'com'

const { SystemError } = errors

function getItemsFromUser() {

    return fetch(`${import.meta.env.VITE_API_URL}/items/owner`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .then(response => {
            const status = response.status

            if (status === 200)
                return response.json()
                    .then(items => items)
                    .catch(error => { throw new SystemError(error.message) })

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

export default getItemsFromUser