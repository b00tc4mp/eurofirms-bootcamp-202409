fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzQ2MWU1YmEyNGIwN2JjMmEzY2E3YjgiLCJpYXQiOjE3MzI5MTM0NjZ9.CY9W4mXST6Oj31Vk3mMjtsklVpsKpVJXDs0oau9ddCg',
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