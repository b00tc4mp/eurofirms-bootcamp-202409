fetch('http://localhost:8081/messages', {
    method: 'GET'
    ,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzY1YmVlZWQ2MzlhOTAzNGYyZjBkMWYiLCJpYXQiOjE3MzU0MDE4MDR9.nucPsOnSCYL5W5Xm4iU117Bk-V-wSzKf83s7baNvlWY'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))
