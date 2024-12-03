fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzRhM2ZkOWEwODFhOWUwY2RlZDNhN2EiLCJpYXQiOjE3MzMxNjY3NDN9.0rCX9z95R0_pn-4J5oa5GOk3d5ZAMJJe3kz7CYxejdo',
        'Content-Type': 'application/json'
    },
    body: '{"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-BOIF6MJSwo88X9aicuYOeZykc_nzbg19OTBVAGIfROWKYAEzYVET2qWdFiB1dsCThw&usqp=CAU","text":"hello world"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))