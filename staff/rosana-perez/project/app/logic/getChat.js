import { errors } from 'com'

const { SystemError } = errors

function getChat(chatId) {

    return fetch(`${import.meta.env.VITE_API_URL}/chats/${chatId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        }
    })
        .then(response => {
            const status = response.status

            if (status === 200)
                return response.json()
                    .then(messages => messages)
                    .catch(error => { throw new SystemError(error.message) })

            return response.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const error = body.error
                    const message = body.message

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
        .catch(error => { throw new SystemError(error.message) })
}

export default getChat