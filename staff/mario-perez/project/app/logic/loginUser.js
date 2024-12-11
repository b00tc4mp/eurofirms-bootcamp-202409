function loginUser(username, password) {
    if (typeof username !== 'string')
        throw new Error('Usuario incorrecto')
    if (username.length < 4)
        throw new Error('Usuario incorrecto')

    if (typeof password !== 'string')
        throw new Error('Contraseña incorrecta')
    if (password.length < 8)
        throw new Error('Contraseña incorrecta')

    var users = JSON.parse(localStorage.users)

    var user = users.find(function (user) {
        return user.username === username && user.password === password
    })

    if (user === undefined)
        throw new Error('Credenciales erróneas')

    sessionStorage.userId = user.id
}