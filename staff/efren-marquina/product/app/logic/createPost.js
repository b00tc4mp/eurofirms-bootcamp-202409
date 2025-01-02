import { validate } from 'com'

function createPost(image, text) {
    validate.image(image)
    validate.text(text)

    return fetch('http://localhost:8080/posts', {
        method: 'POST',
        headers: {
            Authorization: `Baerer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image, text })
    })
        .then(response => {
            const status = response.status

            if (status === 201) return

            return response.json()
                .then(body => {
                    const error = body.error
                    const message = body.message

                    throw new Error(message)
                })
        })
}

export default createPost