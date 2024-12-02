fetch('http://localhost:8080/posts/674251b55de4e58afc897f51', {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzQyNTFiNTVkZTRlNThhZmM4OTdmNGYiLCJpYXQiOjE3MzI5MTM2MTd9.PJkTz3d5oDIum2v4djuDQRccoXcsXAs2iwnT7WJao2I'
    },
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))