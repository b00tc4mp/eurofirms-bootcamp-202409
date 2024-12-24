fetch('http://localhost:8080/users/676ae12e07ed1f08ace49dfc/name', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzZhZTEyZTA3ZWQxZjA4YWNlNDlkZjgiLCJpYXQiOjE3MzUyMjk1MTN9.kB8_KCxzlUeaEe675xXfCBIzMq3jNYHimNAJZ-g5ffo'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))