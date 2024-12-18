import { validate, errors } from 'com'

const { SystemError } = errors

function favouriteMark(itemId) {
    validate.itemId(itemId)


    return fetch(`${import.meta.env.VITE_API_URL}/items/${itemId}/favourites`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
        }
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

export default favouriteMark