fetch('http://localhost:8080/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzQ5Y2QwNzNhNTMxMGQ1Y2MyODM4M2EiLCJpYXQiOjE3MzI5NTk0NDd9.WYP_mcuU_2LSAP6HFDcSDgX85SKcH4Fm6FE0iBe0L8w',
        'Content-Type': 'application/json'
    },
    body: '{"image":"https://cdn.getyourguide.com/img/tour/6419f8fbed487.jpeg/97.jpg","text":"Excursion por el Amazonas"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))

