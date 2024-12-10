import { validate, errors } from 'com'

const { SystemError } = errors

function editItem(itemId, text) {
    console.log(itemId, text)

    validate.itemId(itemId)
    validate.text(text)

    return fetch(`${import.meta.env.VITE_API_URL}/items/${itemId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {
            const status = response.status

            if (status === 204) return

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

export default editItem