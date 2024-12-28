fetch('http://localhost:8080/places/676fc2e142b3b5df437b61dd', {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzY1YjVmYzQwMTY3MjNhZTUzZTllYmUiLCJpYXQiOjE3MzUzODY3MTd9.-zctwHZuzI46cSbgGTLBW9OIs65GzeoHWdx55LQbmBs'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))