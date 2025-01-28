fetch('http://localhost:8081/users/676d88c32985eb151fdf75fa', {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzZkODhjMzI5ODVlYjE1MWZkZjc1ZmEiLCJpYXQiOjE3MzUzMzg4NTN9.iRb5UQ9y3ndJ_R4zg5PurDP958PuiGf7-BrObDiAqPU',
        'Content-Type': ' application/json'
    },
    body: '{"name": "User Five Edited", "location": "city edited", "email": "userfive@edited.com", "username": "userfiveedited", "password": "234234234"}'
})

    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))