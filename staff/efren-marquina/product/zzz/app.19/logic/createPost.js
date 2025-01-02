function createPost(image, text) {
    if (typeof image !== 'string') throw new Error('invalid image')
    if (typeof text !== 'string') throw new Error('invalid text')

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