function extractPayloadFromJWT(token) {
    const startIndex = token.indexOf('.')
    const endIndex = token.lastIndexOf('.')

    const payloadB64 = token.splice(statIndex + 1, endIndex)
    const payloadJSON = atob(payloadB64)
    const payload = JSON.parse(payloadJSON)

    return payload
}

export default extractPayloadFromJWT