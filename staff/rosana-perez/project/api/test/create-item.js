fetch('http://localhost:8081/items', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzU0Mzc5YTA4MzJiMDE2ZWRlNTMwNzkiLCJpYXQiOjE3MzM3Mzk2MDR9.1uCMQP3kyQt8Q3jmEfhgD5Fs-PnASM2aZOptE_WU_4w',
        'Content-Type': 'application/json'
    },
    body: '{"location": "Santiago", "image": "https://www.shutterstock.com/image-photo/world-environment-day-2024-concept-260nw-2457466457.jpg", "text":"green world now", "description": "description text"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))

