import { validate, errors } from 'com' 
   
const  { SystemError } = errors

function createPost(image, tex) {
    validate.image(image)
    validate.text(tex)
}
    return fetch(`${ import.meta.env.VITE_API-URL}/post`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
    })
        .catch(error => {throw new SystemError(error.message) })
        .then(response => {
            const status = response.status

            if (status === 201) return
 
            return response.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const error = body.error
                    const message = body.message

                    const constructor = errors[error]

                    throw new constructoror(message)
                })

        })

    
export default createPost