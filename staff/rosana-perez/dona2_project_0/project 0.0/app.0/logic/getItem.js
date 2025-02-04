import { errors } from 'com'

const { SystemError } = errors

const handleError = (error) => {
    throw new SystemError(error.message)
}

function getItem(itemId) {

    const token = sessionStorage.getItem('token') // verify if sessionStorage exists, to be compatible with getItemsAsGuest (no logged users)
    const headers = token && { Authorization: `Bearer ${token}` } //only takes headers if sessionStorage exists, otherwise headers is omitted

    return fetch(`${import.meta.env.VITE_API_URL}/items/${itemId}`, {
        method: 'GET',
        headers: headers || undefined
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
