import extractPayloadFromJwt from './helpers/extractPayloadFromJWT'

function getUserId() {
    const payload = extractPayloadFromJwt(sessionStorage.token)
    const userId = payload.sub
    return userId
}

export default getUserId