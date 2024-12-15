fetch('http://localhost:8081/items/675b423a21462281f2edbda3/messages/', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzViNDIzYTIxNDYyMjgxZjJlZGJkOWYiLCJpYXQiOjE3MzQwOTIxNDJ9.b_PkJYvAQsTwzRddtdWvGXbDPcYr2aPc2A1Nb52BgUE',
        'Content-Type': 'application/json'
    },
    body: '{ "recipientId": "775b423a21462281f2edbda0", "content": "message testing js"}'

})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))