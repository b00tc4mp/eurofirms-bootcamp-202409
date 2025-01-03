fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzcxODgxMDU5ZjFlMzc1YmZhZmE3NmYiLCJpYXQiOjE3MzU1Mzc5NTR9.BRCukmXxYMBL5oztKdjbFlo1A5Ob9LF1gRPQnshFvX4',
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