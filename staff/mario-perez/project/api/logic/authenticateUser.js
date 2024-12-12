import fs from 'fs'

function authenticateUser(username, password) {
    if (typeof username !== 'string')
        throw new Error('Usuario incorrecto')
    if (username.length < 4)
        throw new Error('Usuario incorrecto')

    if (typeof password !== 'string')
        throw new Error('Contraseña incorrecta')
    if (password.length < 8)
        throw new Error('Contraseña incorrecta')

    const usersJSON = fs.readFileSync('data/users.json', 'utf8')
    const users = JSON.parse(usersJSON)

    var user = users.find(function (user) {
        return user.username === username && user.password === password
    })

    if (user === undefined)
        throw new Error('Credenciales erróneas')

    return user.id

}

export default authenticateUser