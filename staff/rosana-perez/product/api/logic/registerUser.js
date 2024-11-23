import { User } from '../data/models.js'

function registerUser(name, email, username, password) {
    if (typeof name !== 'string') throw new Error('invalid name')
    if (name.length < 4) throw new Error('invalid name length')

    if (typeof email !== 'string') throw new Error('invalid email')
    if (email.length < 6) throw new Error('invalid mail length')
    if (!email.includes('@')) throw new Error('invalidad email format')
    if (!email.includes('.')) throw new Error('invalid email format')
    const indexOfAt = email.indexOf('@')
    const indexOfDot = email.indexOf('.')
    if (indexOfDot < indexOfAt) throw new Error('invalid email format')
    //TODO add more rules form email validation (position of @ and .)

    if (typeof username !== 'string') throw new Error('invalid username')
    if (username.length < 4) throw Error('invalid username length')

    if (typeof password !== 'string') throw new Error('invalid password')
    if (password.length < 8) throw new Error('invalid password length')

    return User.create({ name, email, username, password })
        .catch(error => {
            if (error.code === 11000) throw new Error('user already exists')

            throw new Error(error.message)
        })
}

export default registerUser
