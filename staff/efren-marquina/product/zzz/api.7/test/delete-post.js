fetch('http://localhost:8080/posts/6771a6b449e3c03748c8097b', {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzcxODgxMDU5ZjFlMzc1YmZhZmE3NmYiLCJpYXQiOjE3MzU1Mzc5NTR9.BRCukmXxYMBL5oztKdjbFlo1A5Ob9LF1gRPQnshFvX4'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))