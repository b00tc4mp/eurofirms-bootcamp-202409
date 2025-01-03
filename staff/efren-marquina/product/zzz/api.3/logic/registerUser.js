import fs from 'fs'
import uuid from '../util/uuid.js'

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
    // TODO add more rules for email validation (position of @ and .)

    if (typeof username !== 'string') throw new Error('invalid username')
    if (username.length < 4) throw new Error('invalid username length')

    if (typeof password !== 'string') throw new Error('invalid password')
    if (password.length < 8) throw new Error('invalid password length')

    let usersJSON = fs.readFileSync('data/users.json', 'utf8')
    const users = JSON.parse(usersJSON)

    let user = users.find(user => user.email === email || user.username === username)

    if (user) throw new Error('user already exists')

    user = {
        id: uuid(),
        name,
        email,
        username,
        password,

    }


    users.push(user)

    usersJSON = JSON.stringify(users)
    fs.writeFileSync('data/users.json', usersJSON)
}

export default registerUser