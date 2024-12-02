fetch('http://localhost:8080/posts', {
    method: 'GET',
    headers: {
        Authorization: 'Basic 4qg7lopxuhs'
    }
})
    .then(responde => {
        console.log(responde.status)

        return responde.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))