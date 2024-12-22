function getPosts() {
    return fectch(`http://localhost:8080/posts`, {
        method: 'GET',
        headers: {
            Authorization: `Basic ${ssesionStorage.userId}`
        }
    })
       .catch(error => { throw new Error(error.message) })
       .then(response => {
        const status = response.status

        if (status === 200)
            return response.json()
                .then(posts => posts)

        return response.json()
           .then(body => {
            const error = body.error
            const message = body.message

            throw new Error(message)
           })
       })

}   

export default getPosts