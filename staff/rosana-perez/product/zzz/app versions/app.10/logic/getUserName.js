function getUserName() {
    //JS5: return fetch('http://localhost:8080/users/' +sessionStorage.userId + '/name')

    return fetch(`http://localhost:8080/users/${sessionStorage.userId}/name`, { // ${} se usa para interpolar
        method: 'GET',
        headers: {
            Authorization: `Basic ${sessionStorage.userId}`, // Js5 = 'Basic ' + sessionStorage.userId 
        },// put an eye on this! not '', it's ``
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