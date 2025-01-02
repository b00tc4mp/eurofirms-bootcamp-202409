import { validate } from 'com'

function deletePost(postId) {
    validate.postId(postId)
    
    return fetch(`http://localhost:8080/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Baerer ${sessionStorage.token}`
        }
    })
        .then(response => {
            const status = response.status

            if (status === 204) return

            return response.json()
                .then(body => {
                    const error = body.error
                    const message = body.message

                    throw new Error(message)
                })
        })
}

export default deletePost