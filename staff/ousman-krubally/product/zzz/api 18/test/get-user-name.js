fetch('http://localhost:8080/users/674a3fd9a081a9e0cded3a7a/name', {
    method: 'GET',
    headers: {
        authorization: 'Basic 674a3fd9a081a9e0cded3a7a'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(boy => console.log(boy))
    .catch(error => console.error(error))