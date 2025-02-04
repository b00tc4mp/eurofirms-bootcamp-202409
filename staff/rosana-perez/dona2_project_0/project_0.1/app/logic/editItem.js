import { validate, errors } from 'com'

const { SystemError } = errors

function editItem(itemId, title) {
    validate.itemId(itemId)
    validate.title(title)

    return fetch(`${import.meta.env.VITE_API_URL}/items/${itemId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'title': title })
    })
        .then(response => {
            const status = response.status

            if (status === 204) return

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

export default editItem