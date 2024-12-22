fetch('http://localHost:8080/posts/674a1c86d145ad8b174727', {
    method: 'DELETE',
    headers: {
        Authorization: 'Bearee 4qgqeh5z01k'
    }
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))