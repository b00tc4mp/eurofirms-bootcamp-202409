fetch('http://localhost:8080/users/4qh4hc5vzdu/name', {
    method: 'GET',
    headers: {
        Authorization: 'Basic 4qh4hc5vzdu',
    },
})
    .then(response => {
        console.log(response.status)
        
        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))