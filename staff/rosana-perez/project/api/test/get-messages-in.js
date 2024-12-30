fetch('http://localhost:8081/messagesIn', {
    method: 'GET'
    ,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzY1YmVlZWQ2MzlhOTAzNGYyZjBkMWYiLCJpYXQiOjE3MzU1ODgyNzl9.7XJgV76LX2kU-OfAo_Y7a5LeJ2Rp8jmnQ-s9ZbjZOOw'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))
