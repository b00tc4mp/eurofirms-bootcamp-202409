fetch('http://localhost:8081/chats/', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzY1YmVlZWQ2MzlhOTAzNGYyZjBkMjAiLCJpYXQiOjE3MzU5Mzg3Njh9.BXa3D9iys_PyeZrvPxLf0G4gK3ip0yW_Bd24fxxZJJw',
        'Content-Type': 'application/json'
    },
    body: '{ "itemId": "676d89052985eb151fdf7623", "content": "message testing send-message.js"}'

})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))