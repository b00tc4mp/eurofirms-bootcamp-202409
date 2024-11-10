fetch('http://localhost:8080/users/4qg7lopxuhs/name', {
    method: 'GET',
    headers: {
        Authorization: 'Basic 4qg7lopxuhs'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))