function extractPayloadFromJWT(token) {
    if (!token) {
        console.log('No hay token en sessionStorage. Usuario no logueado.')
        return null
    }

    const startIndex = token.indexOf('.')
    const endIndex = token.lastIndexOf('.')

    const payloadB64 = token.slice(startIndex + 1, endIndex)
    const payloadJSON = atob(payloadB64)
    const payload = JSON.parse(payloadJSON)

    return payload
}

export default extractPayloadFromJWT 
