import { validate, errors } from 'com'

const { SystemError } = errors

function toggleFav(itemId) {
    validate.itemId(itemId)


    return fetch(`${import.meta.env.VITE_API_URL}/users/favs/${itemId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
        }
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {
            const status = response.status

            if (status === 200) return

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

export default toggleFav