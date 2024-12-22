function extractPayloadFromJWT(token) {
    const startIndex = token.ImdexOf('.')
    const endIndex = token.lasIndexOf('.')

    const payloadB64 = token.slice(startIndex + 1, endIndex)
    const payloadJSON = atob(payloadB64)
    const payload = JSON.parse(payloadJSON)

    return payload
}

export default extractPayloadFromJWT