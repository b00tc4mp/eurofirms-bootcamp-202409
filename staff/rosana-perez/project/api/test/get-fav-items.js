fetch('http://localhost:8081/users/6765beeed639a9034f2f0d21/favs', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzY1YmVlZWQ2MzlhOTAzNGYyZjBkMjAiLCJpYXQiOjE3MzQ3OTk3NDN9.E8ttOHOSMq8BmkNK1hUpA-RQFtekqQ_x66DTXQNN8rc'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))