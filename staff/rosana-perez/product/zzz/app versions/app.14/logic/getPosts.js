import { errors } from 'com'

const { SystemError } = errors

function getPosts() {
    return fetch(`http://localhost:8080/posts`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`
        },
        // Js5 = 'Basic ' + sessionStorage.userId 
        // put an eye on this! not '', it's ``
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {
            const status = response.status

            if (status === 200)
                return response.json()
                    .catch(error => { throw new SystemError(error.message) })
                    .then(posts => posts)

            return response.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const error = body.error
                    const message = body.message

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default getPosts