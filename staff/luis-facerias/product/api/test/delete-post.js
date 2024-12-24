fetch('http://localhost:8080/posts/674a1c86d6d145ad8b174727', {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzZhZTEyZTA3ZWQxZjA4YWNlNDlkZjgiLCJpYXQiOjE3MzUyMTg5NDV9.SozHJJZBiHNsuPXJCdIa-FpvkJPUySoL8JPXt90zPH4'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))