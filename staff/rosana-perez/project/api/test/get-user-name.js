fetch('http://localhost:8081/users/6754379a0832b016ede53078/name', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzU0Mzc5YTA4MzJiMDE2ZWRlNTMwNzkiLCJpYXQiOjE3MzM1ODMxMjh9.ldRW0fy-du4ALzqejVLmA6j5s1E5Ioj6MDLJ-roS1II'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))