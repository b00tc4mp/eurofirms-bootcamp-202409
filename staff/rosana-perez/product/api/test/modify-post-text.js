fetch('http://localhost:8080/posts/674e0e3f2031f05ac9cebee1', {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzQyNTFiNTVkZTRlNThhZmM4OTdmNGUiLCJpYXQiOjE3MzMzMTAzODJ9.O3wwoTVVUfAO6MFJc6Q4hotiqb40cEa6IGRMIaQ13fs',
        'Content-Type': 'application/json'
    },
    body: '{"text": "new test with machine"}'
})

    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))

