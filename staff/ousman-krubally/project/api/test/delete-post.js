fetch('http://localhost:8082/posts/6792b02cf1bc0cacc8c97805', {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzhmNTQ0ZDVjYjBkMTVlZDY5MjM1ZWUiLCJpYXQiOjE3Mzc1NTQxNjR9.gfbooBj3aiXSeYBXaPvFV0h5WCzrFLc-9-slo7r6Qxo'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))