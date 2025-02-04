fetch('http://localhost:8081/items/owner', {
    method: 'GET',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzhiOTU0ZGUyMjczODY0M2Y1NmU0YTkiLCJpYXQiOjE3MzcyMDkyMjZ9.GK_Sa_57dWH1e17eg7-2EgHa6fJ8ZinIHFL7liT_eIc'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))