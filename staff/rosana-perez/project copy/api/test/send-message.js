fetch('http://localhost:8081/chats', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzZkODhjMzI5ODVlYjE1MWZkZjc1ZmEiLCJpYXQiOjE3MzY1MDg4NDJ9.uVJD35XPz08qdnRYO6FIury6zNFFQId8L4UlU3Geq-E',

        'Content-Type': 'application/json'
    },
    body: '{ "content": "message after new sendMessage logic", "chatId": "", "itemId": "6765beeed639a9034f2f0d24" }'

})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))