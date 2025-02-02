import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, CredentialsError } = errors

function authenticateUser(username, password) {
    validate.username(username)
    validate.password(password)

    return User.findOne({ username, password })
        .then(user => {
            if (!user) throw new CredentialsError('wrong credentials')

            return user._id.toString()
        })
        .catch(error => { throw new SystemError(error.message) })
}

export default authenticateUser