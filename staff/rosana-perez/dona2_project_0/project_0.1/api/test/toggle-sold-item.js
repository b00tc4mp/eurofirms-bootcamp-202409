fetch('http://localhost:8081/sold/678b954de22738643f56e4ac', {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzhiOTU0ZGUyMjczODY0M2Y1NmU0YTkiLCJpYXQiOjE3MzcyMjkzNzd9.OK771KjgK95YXWWHAshGFL5YOwZdNtzx3nSidRFDiBY'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))
