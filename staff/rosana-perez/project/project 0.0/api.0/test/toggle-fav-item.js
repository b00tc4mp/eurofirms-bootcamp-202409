fetch('http://localhost:8081/users/favs/678b954de22738643f56e4ad', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzhiOTU0ZGUyMjczODY0M2Y1NmU0YTkiLCJpYXQiOjE3MzcyMjA4NjJ9.aXxSUz0y3Dy6OiSWRR9oEp2CWDgqzM3enmEDHexs-lg'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))