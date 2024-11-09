function isUserLoggedIn() {
    if (sessionStorage.userId !== undefined) return true

    return false
}