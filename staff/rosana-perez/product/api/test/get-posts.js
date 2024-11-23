fetch('http://localhost:8080/posts', {
    method: 'GET',
    headers: {
        Authorization: 'Basic 674251b55de4e58afc897f4f'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))