function isUserLoggedIn() {
    return !!sessionStorage.token // ->!!<- makes a boolean result
}

export default isUserLoggedIn