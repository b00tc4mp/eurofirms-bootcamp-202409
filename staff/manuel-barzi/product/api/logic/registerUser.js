import { User } from '../data/models.js'
import { validate } from 'com'

function registerUser(name, email, username, password) {
    validate.name(name)
    validate.email(email)
    validate.username(username)
    validate.password(password)

    return User.create({ name, email, username, password })
        .catch(error => {
            if (error.code === 11000) throw new Error('user already exists')

            throw new Error(error.message)
        })
}

export default registerUser