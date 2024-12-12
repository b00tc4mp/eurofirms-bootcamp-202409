import fs from 'fs'
import uuid from '../util/uuid.js'

function registerUser(name, email, username, password) {
    if (typeof name !== 'string')
        throw new Error('Nombre no válido')

    if (name.length < 2)
        throw new Error('El nombre es demasiado corto')

    if (typeof email !== 'string')
        throw new Error('Email no válido')

    if (email.length < 6)
        throw new Error('El email es demasiado corto')

    if (!email.includes('.'))
        throw new Error('Email debe contener un punto')

    var indexOfAt = email.indexOf('@')
    var indexOfDot = email.indexOf('.')

    if (indexOfDot < indexOfAt)
        throw new Error('Email incorrecto')

    if (!email.includes('@'))
        throw new Error('El email tiene que tener una @')

    if (typeof username !== 'string')
        throw new Error('Usuario no válido')

    if (username.length < 4)
        throw new Error('El nombre de usuario debe tener al menos 4 caracteres')

    if (typeof password !== 'string')
        throw new Error('Contraseña no válida')

    if (password.length < 8)
        throw new Error('La contraseña debe tener por lo menos 8 caracteres')

    let usersJSON = fs.readFileSync('data/users.json', 'utf8')
    const users = JSON.parse(usersJSON)

    var user = users.find(function (user) {
        return user.email === email || user.username === username
    })

    if (user !== undefined)
        throw new Error('El usuario ya existe')

    user = {}
    user.id = uuid()
    user.name = name
    user.email = email
    user.username = username
    user.password = password

    users.push(user)

    usersJSON = JSON.stringify(users)
    fs.writeFileSync('data/users.json', usersJSON)
}

export default registerUser