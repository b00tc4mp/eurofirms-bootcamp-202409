function getUserName () {
    //return fecth('http://localhost:8080/users/' + sessionStorage.userId + '/name', {
    return fetch(`http://localhost:8080/users/${sessionstorage}/name`, {
        method: 'GET',
        headers: {
            //Autorization: 'Basic ' + sessionStorage.userId
            autoritzation: `Basic ${sessionSotage.userId}`
        }
    })
        .catch(error => { throw new Error(error.message) })
        .then(response => {
            const status = response.status

            if (status === 200)
                return response.json()
                    .then(name => name)

            return response.json()
                .then(body => {
                    const error = body.error
                    const message = body.message

                    throw new Error(message)
                })
        })
        
    }  
