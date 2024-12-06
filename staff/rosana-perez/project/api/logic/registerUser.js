import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, DuplicityError } = errors

function registerUser(name, city, email, username, password) {
    validate.name(name)
    validate.city(city)
    validate.email(email)
    validate.username(username)
    validate.password(password)

    return User.create({ name, city, email, username, password })
        .catch(error => {
            if (error.code === 11000) throw new DuplicityError('user already exists')

            throw new SystemError(error.message)
        })
}

export default registerUser