fetch('http://localhost:8081/items/675750eabda4ee1b37928d31', {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzU3MjMwMmIyNDRmODAyYTcwODViN2QiLCJpYXQiOjE3MzM4MjQ2NDB9.nammqypRo5QK0MtXHjM9tysi97gWQrSvPyHI2I915F0',
        'Content-Type': 'application/json'
    },
    body: '{ "text": "this is an edited text from edit-item.js" }'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))
