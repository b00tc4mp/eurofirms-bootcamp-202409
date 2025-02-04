import extractPayloadFromJwt from './helpers/extractPayloadFromJWT'

function getLoggedInUserId() {
    if (sessionStorage.token) {
        const payload = extractPayloadFromJwt(sessionStorage.token)
        const userId = payload.sub

        return userId
    }
    return ('undefined')
}

export default getLoggedInUserId