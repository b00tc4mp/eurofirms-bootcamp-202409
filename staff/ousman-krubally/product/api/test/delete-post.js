fetch('http://localhost:8080/posts/67546b737a15aa6ef3ddb207', {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzU0MzhlNjM2MzZmYTAwOWM3NzU5YjEiLCJpYXQiOjE3MzM1ODU2MDN9.it60GGiwSbVZ603-WGHcpX3ZYAubDZXHL8eZJDw7sxA'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))