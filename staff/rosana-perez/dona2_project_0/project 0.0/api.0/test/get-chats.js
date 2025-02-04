fetch('http://localhost:8081/chats', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzY1YmVlZWQ2MzlhOTAzNGYyZjBkMjAiLCJpYXQiOjE3MzU5OTQxNzN9.zv_EXDY0DnU-AonrVT4XLoNxsr-BrvI79rjSVyFeTgI'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))
