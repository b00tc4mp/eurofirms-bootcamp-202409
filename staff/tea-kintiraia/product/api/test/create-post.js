fetch('htpp://localhost:8080/post', {
    method: 'POST',
    headers: {
        Authorization: 'Basic 4qg7lopxuhs',
        'Content-Type': 'application/json'
    },
    body: '{"image":"https://cdn-icons-png.flaticon.com/512/5986/5986331.png", "text":"hello world"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))