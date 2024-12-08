fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzU0MzhlNjM2MzZmYTAwOWM3NzU5YjEiLCJpYXQiOjE3MzM1ODU2MDN9.it60GGiwSbVZ603-WGHcpX3ZYAubDZXHL8eZJDw7sxA',
        'Content-Type': 'application/json'
    },
    body: '{"image":"https://depor.com/resizer/v2/2EIKTDD7SJEIFIKDP2KOFH4CWM.jpg?auth=fd4c04bca0da52a698cf5a2d784ef14234754a9f758f5fe9af63eb11779d359f&width=620&quality=75&smart=true","text":"i m oclan"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))