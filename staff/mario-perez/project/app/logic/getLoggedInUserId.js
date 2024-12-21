import { validate, utils } from "../../com";

function getLoggedInUserId() {
    //TODO validar token

    const { sub: userId } = utils.extractPayload(sessionStorage.userId)

    return userId
}

export default getLoggedInUserId