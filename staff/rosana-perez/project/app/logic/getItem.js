import { errors } from 'com'

const { SystemError } = errors

const handleError = (error) => {
    throw new SystemError(error.message)
}

function getItem(itemId) {
    return fetch(`${import.meta.env.VITE_API_URL}/items/${itemId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .catch(error => handleError(error))
        .then(response => {
            const status = response.status

            if (status === 200)
                return response.json()
                    .catch(error => handleError(error))
                    .then(item => item)

            return response.json()
                .catch(error => handleError(error))
                .then(body => {
                    const error = body.error
                    const message = body.message

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default getItem
