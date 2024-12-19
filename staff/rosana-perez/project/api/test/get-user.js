fetch('http://localhost:8081/users/67646b12e16260141b65698e', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzYxYzI4OGYwYzQ3NzE5OTQzNjQ3ZmMiLCJpYXQiOjE3MzQ0NjI4MTV9.HQs6KqmBF_sWNs7rpRtRwL39etOLKmxmi4zvoHrlPFo'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))