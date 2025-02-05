fetch('http://localhost:8081/sold/67a27666a1049eab93b9720f', {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2EyNmQxOTc5MTg3NDVlMWZjYTFkYTkiLCJpYXQiOjE3Mzg2OTk4NjB9.LQyxZv3RBx_TB4VzvHZoQE2ZI9YGitPxXco3_F3YeBE'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))
