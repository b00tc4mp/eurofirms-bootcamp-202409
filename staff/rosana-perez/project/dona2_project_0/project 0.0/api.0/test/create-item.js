fetch('http://localhost:8081/items', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzZkODhjMzI5ODVlYjE1MWZkZjc1ZmEiLCJpYXQiOjE3MzY5Njg0MjN9.Hd39mP5GTQx-lenPVcK5ysqibzPoATqFDI4RFS5ln-g',
        'Content-Type': 'application/json'
    },
    body: '{"location": "Santiago", "image": "https://www.shutterstock.com/image-photo/world-environment-day-2024-concept-260nw-2457466457.jpg", "title":"green world now", "description": "description text", "sold": true}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))

