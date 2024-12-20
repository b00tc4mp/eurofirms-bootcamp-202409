fetch('http://localhost:8081/messages', {
    method: 'GET'
    ,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzYxY2Y5YTA0Mjk0ZTY2MzEzMjMxNjMiLCJpYXQiOjE3MzQ0NjM1ODN9.6gxjSNKEXt-jw55yhDU7PyTO_25l4aUu_EzcxK_hC8Q'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))
