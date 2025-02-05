import { errors } from 'com'

const { SystemError } = errors

function getChats() {

    return fetch(`${import.meta.env.VITE_API_URL}/chats`, {
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

export default getChats