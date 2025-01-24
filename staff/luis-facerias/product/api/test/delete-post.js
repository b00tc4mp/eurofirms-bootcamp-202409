fetch('http://localhost:8080/posts/676ae12e07ed1f08ace49dfa', {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzZhZTEyZTA3ZWQxZjA4YWNlNDlkZjYiLCJpYXQiOjE3Mzc2NjUxMTl9.GSktk9TkhjpSiyCzeYxpRbLu98aTH5sNKdL0b_eu4I0'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))