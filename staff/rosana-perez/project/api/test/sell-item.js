fetch('http://localhost:8081/sell/6788094c96e06c838c0011e1', {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzZkODhjMzI5ODVlYjE1MWZkZjc1ZmEiLCJpYXQiOjE3MzY5Njg0MjN9.Hd39mP5GTQx-lenPVcK5ysqibzPoATqFDI4RFS5ln-g'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))
