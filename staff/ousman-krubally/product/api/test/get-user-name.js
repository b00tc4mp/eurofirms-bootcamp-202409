fetch('http://localhost:8080/users/674a3fd9a081a9e0cded3a7a/name', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzRhM2ZkOWEwODFhOWUwY2RlZDNhN2EiLCJpYXQiOjE3MzQxOTYxODF9.1vDSszkvYL0lu9nryV2G13dHZyISJvLFvZ5eK6v_3Y8'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))