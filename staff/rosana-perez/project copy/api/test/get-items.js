fetch('http://localhost:8081/items', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzYxY2Y5YTA0Mjk0ZTY2MzEzMjMxNjMiLCJpYXQiOjE3MzQ1NDc0MzV9._lIki5qmuEJgD5ERsI8BUkVrM9oLSJXroNXBhfggIns'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))