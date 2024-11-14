import fs from 'fs' // para poder guardar los datos en el disco duro,(fail stem , trabajar con archivos y sistemas del ordenador)

import uuid from '../util/uuid.js' // importat el uuid que en su archivo ya le hemos mandado la funcion exportar,indicar la ruta

function registerUser(name, email, username, password) {
    if (typeof name !== 'string') throw new Error('invalid name')
    if (name.length < 1) throw new Error('invalid name length')

    if (typeof email !== 'string') throw new Error('invalid email')
    if (email.length < 6) throw new Error('invalid email length')
    if (!email.includes('@')) throw new Error('invalid email format')
    if (!email.includes('.')) throw new Error('invalid email format')
    const indexOfAt = email.indexOf('@')
    const indexOfDot = email.indexOf('.')
    if (indexOfDot < indexOfAt) throw new Error('invalid email format')


    if (typeof username !== 'string') throw new Error('invalid username')
    if (username.length < 4) throw new Error('invalid username length')

    if (typeof password !== 'string') throw new Error('invalid password')
    if (password.length < 8) throw new Error('invalid password length')

    let usersJSON = fs.readFileSync('data/users.json', 'utf8')// utf8 formato de lectura,como tiene que leerlo al convetirlo a string
    const users = JSON.parse(usersJSON) // lo estoy convirtiendo a objeto

    let user = users.find(user => user.email === email || user.username === username)

    if (user) throw new Error('user already exists')

    user = {}
    user.id = uuid()
    user.name = name
    user.email = email
    user.username = username
    user.password = password

    users.push(user)

    usersJSON = JSON.stringify(users)
    fs.writeFileSync('data/users.json', usersJSON) // le encargamos a fs que escriba el usuario  en el disco y especificamos ruta
}

export default registerUser // exportarla para luego importarla en test