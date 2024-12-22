function createPost(postId) {
    if (typeof postId !== 'string') throw new Error ('invalid postId')
        
        return fetch(`http://localhost:8080/posts/${postId}`, {
            method: 'POST',
            headers: {
                Authorization:`Basic ${sessionStorage.userId}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                const status = reaponse.status

                if (status === 204) return

                return response.json()
                    .then(body => {
                       const error = body.error
                       const message = body.message

                       throw new Error(message)
                    })
                       
            })
}

export default createPost
