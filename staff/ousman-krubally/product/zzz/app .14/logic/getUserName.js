function getUserName() {
    //return fetch('http://localhost:8080/users/' + sessionStorage.userId + '/name', {
    return fetch(`http://localhost:8080/users/${sesionStorage.userId}/name`, {
        method: 'GET',
        headers: {
            //Authorizacion: 'Basic ' + sesionStorage.userId
            Authorization: `Basic ${sesionStorage.userId}`
        }
    })
        .catch(error => { throw new Error(error.message) })
        .then(response => {
            const status = response.status

            if (status === 200)
                return response.json()

            return response.json()
                .then(body => {
                    const error = body.error
                    const message = body.message

                    throw new Error(message)
                })
        })
}