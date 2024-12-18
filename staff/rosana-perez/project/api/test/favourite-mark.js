fetch('http://localhost:8081/items/676177935a732e2fa38984ba/favourites', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzYxNzc5MzVhNzMyZTJmYTM4OTg0YjYiLCJpYXQiOjE3MzQ0NDk4NDl9.6kRcuuz_P7aJ_0Q8s5gJeMhKQck1RIU_S5wdbB-6ICc'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))