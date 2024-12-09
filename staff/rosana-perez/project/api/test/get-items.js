fetch('http://localhost:8081/items', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzU0Mzc5YTA4MzJiMDE2ZWRlNTMwNzkiLCJpYXQiOjE3MzM3NDM3MjJ9.blSzGLOFOwiBgXYTZzeJeyiN4z7g5jf2bh5EIIERwz0'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))