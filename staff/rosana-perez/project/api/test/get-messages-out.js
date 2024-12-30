fetch('http://localhost:8081/messagesOut', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzY1YmVlZWQ2MzlhOTAzNGYyZjBkMjAiLCJpYXQiOjE3MzU1OTAyNzl9.9SHGbaR8s-hceL72emnYnxlVCiIICza6R_KW0IzK-fQ'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))

