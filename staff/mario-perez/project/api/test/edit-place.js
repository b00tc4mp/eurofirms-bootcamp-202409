fetch('http://localhost:8080/places/67842bbe1d15249790c8a55d', {
    method: 'PATCH',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2Nzg0MmJiZTFkMTUyNDk3OTBjOGE1NTUiLCJpYXQiOjE3MzcxOTkyMjB9.MsSXmSIZ1XbqPyxz0Lda-8v3OhGPv0bpy2YMG0R3EJc',
        'Content-Type': 'application/json'
    },
    body: '{"parkingId":"67842bbe1d15249790c8a55c", "level":1, "space":"1E", "checkin":"2024-12-15T08:00:00.000Z","checkout":"2024-12-20T18:00:00.000Z"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))