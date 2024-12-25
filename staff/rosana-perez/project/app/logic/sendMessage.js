import { validate, errors } from 'com'

const { SystemError } = errors

function sendMessage(itemId, recipientId, content) {
    validate.itemId(itemId)
    validate.recipientId(recipientId)
    validate.content(content)

    return fetch(`${import.meta.env.VITE_API_URL}/items/${itemId}/messages`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ recipientId, content })
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

export default sendMessage