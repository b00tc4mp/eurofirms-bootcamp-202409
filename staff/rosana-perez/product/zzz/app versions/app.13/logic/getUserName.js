import extractPayloadFromJWT from './helpers/extractPayloadFromJWT'

function getUserName() {
    const payload = extractPayloadFromJWT(sessionStorage.token)
    const userId = payload.sub

    return fetch(`http://localhost:8080/users/${userId}/name`, {
        // ${} se usa para interpolar
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        },
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

export default getUserName