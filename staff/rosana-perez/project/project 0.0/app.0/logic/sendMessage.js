import { validate, errors } from 'com'

const { SystemError } = errors

function sendMessage(content, chatId, itemId) {
    validate.content(content)

    const handleResponse = (response) => {
        const status = response.status

        if (status === 201) return

        return response.json()
            .catch(error => { throw new SystemError(error.message) })
            .then(bodyError => {

                const { error, message } = bodyError
                const constructor = errors[error]

                throw new constructor(message)
            })
    }

    const body = { content }

    if (chatId) {
        validate.chatId(chatId)

        body.chatId = chatId
    }
    if (!chatId && itemId) {
        validate.itemId(itemId)

        body.itemId = itemId
    }

    return fetch(`${import.meta.env.VITE_API_URL}/chats`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => { handleResponse(response) })

}

export default sendMessage