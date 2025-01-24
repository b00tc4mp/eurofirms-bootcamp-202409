fetch('http://localhost:8080/users/676ae12e07ed1f08ace49df9/name', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzhiYzkyOTE3ZmI0NDg3MzY3MzQwMGMiLCJpYXQiOjE3Mzc0NjcwMjB9.I66cJn4m89QDHHJBXWmkzp_tZtZAFJvzYTQXI-8Lhr8'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))