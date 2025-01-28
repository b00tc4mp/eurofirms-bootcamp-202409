fetch('http://localhost:8082/users/678f544d5cb0d15ed69235ee/name', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzhmNTQ0ZDVjYjBkMTVlZDY5MjM1ZWUiLCJpYXQiOjE3Mzc1NTQxNjR9.gfbooBj3aiXSeYBXaPvFV0h5WCzrFLc-9-slo7r6Qxo'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))