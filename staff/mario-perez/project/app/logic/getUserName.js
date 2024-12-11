function getUserName() {
    var users = JSON.parse(localStorage.users)

    var user = users.find(function (user) {
        return user.id === sessionStorage.userId
    })

    if (user === undefined) throw new Error('No se encuentra el usuario')

    return user.name
}