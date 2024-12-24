import { validate, errors } from 'com'

const { SystemError } = errors

function createItem(location, image, title, description) {
    console.log(location)
    validate.image(image)
    validate.title(title)
    validate.description(description)

    return fetch(`${import.meta.env.VITE_API_URL}/items`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ location, image, title, description })
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

export default createItem