fetch('http://localhost:8080/posts/674e06ce2f6ab239aa21c965', {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzRhM2ZkOWEwODFhOWUwY2RlZDNhN2EiLCJpYXQiOjE3MzMxNjkzNTB9.rbPBOgcMMJZBx9kfnxcenhuB_9vmXciwQ0z4x7Rqhuw'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))