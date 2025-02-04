fetch('http://localhost:8081/items', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2N2EyNmQxOTc5MTg3NDVlMWZjYTFkYTkiLCJpYXQiOjE3Mzg2OTk4NjB9.LQyxZv3RBx_TB4VzvHZoQE2ZI9YGitPxXco3_F3YeBE',
        'Content-Type': 'application/json'
    },
    body: '{"location": "Santiago", "image": "https://www.shutterstock.com/image-photo/world-environment-day-2024-concept-260nw-2457466457.jpg", "title":"green world now", "description": "description text", "type": "art", "sold": true}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))

