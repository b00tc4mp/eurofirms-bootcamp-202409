fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzQyNTFiNTVkZTRlNThhZmM4OTdmNGYiLCJpYXQiOjE3MzI5MTM2MTd9.PJkTz3d5oDIum2v4djuDQRccoXcsXAs2iwnT7WJao2I',
        'Content-Type': 'application/json'
    },
    body: '{"image":"https://cdn-icons-png.flaticon.com/512/5986/5986331.png","text":"hello world"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))