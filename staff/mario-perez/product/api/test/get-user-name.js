fetch('http://localhost:8080/users/67461e5ba24b07bc2a3ca7b9/name', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzQ2MWU1YmEyNGIwN2JjMmEzY2E3YjgiLCJpYXQiOjE3MzI5MTM0NjZ9.CY9W4mXST6Oj31Vk3mMjtsklVpsKpVJXDs0oau9ddCg'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))