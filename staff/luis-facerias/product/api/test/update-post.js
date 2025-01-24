fetch('http://localhost:8080/posts/6792ab9d36be80d3505d7f0b', {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzZhZTEyZTA3ZWQxZjA4YWNlNDlkZjYiLCJpYXQiOjE3Mzc3MDAzOTZ9.Km1swUfU_NfDQ00hVqW3kQePc0JE2QIP4IEM4b7fr9Y',
        'Content-Type': 'application/json'
    },
    body: '{"text": "Hola Pepito desde FECTH"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))