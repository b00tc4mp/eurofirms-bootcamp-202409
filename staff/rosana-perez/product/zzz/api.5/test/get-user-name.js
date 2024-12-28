fetch('http://localhost:8080/users/674251b55de4e58afc897f4f/name', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzQyNTFiNTVkZTRlNThhZmM4OTdmNGYiLCJpYXQiOjE3MzI5MTM2MTd9.PJkTz3d5oDIum2v4djuDQRccoXcsXAs2iwnT7WJao2I',
    },
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))