import extractPayloadFromJwt from './helpers/extractPayloadFromJWT'

function getLoggedInUserId() {
    const payload = extractPayloadFromJwt(sessionStorage.token)
    const userId = payload.sub

    return userId

}

export default getLoggedInUserId