fetch('http://localhost:8080/posts', {
    method: 'GET',
    headers: {
        Authorization: 'Basic 4qv3jnp9qzq'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))