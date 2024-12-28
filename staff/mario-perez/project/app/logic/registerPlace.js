import { validate, errors } from 'com'

const { SystemError } = errors

function registerPlace(parkingId, level, space, checkin, checkout) {
    validate.level(level)
    validate.space(space)
    validate.checkinAndCheckout(checkin, checkout)

    return fetch(`${import.meta.env.VITE_API_URL}/places/${parkingId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ level, space, checkin, checkout })
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(response => {
            const status = response.status

            if (status === 201) return

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

export default registerPlace