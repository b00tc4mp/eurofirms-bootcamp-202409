function isUserLoggedIn() {
    // if (sessionStorage.userId !== undefined) return true
    // return false

    // return typeof sessionStorage.userId === 'string'

    // return sessionStorage.userId !== undefined

    return !!sessionStorage.token



    //if (sessionStorage.userId !== undefined) return true
    //return false
}

export default isUserLoggedIn