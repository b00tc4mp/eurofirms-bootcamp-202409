fetch('http://localhost:8080/users/h2nxbv3iht/name', {
    method: 'GET',
    headers: {
        Authorization: 'Basic h2nxbv3iht'
    },
})
    .then(response => {
        console.log(response.status)
        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => {
        console.error(error)
    })