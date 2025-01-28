fetch('http://localhost:8081/users/6765beeed639a9034f2f0d21/', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzY1YmVlZWQ2MzlhOTAzNGYyZjBkMjAiLCJpYXQiOjE3MzQ3MjE0MjZ9.wTuzG6cnp1s42b2RKady2rxo75WwoInK5QaVtE9f82Y'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))