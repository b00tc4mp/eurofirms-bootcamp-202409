function isUserLoggedIn() {

    return !!sessionStorage.userId
}
// La función isUserLoggedIn se utiliza para verificar si el usuario está logueado, basándose en la presencia de un valor en sessionStorage