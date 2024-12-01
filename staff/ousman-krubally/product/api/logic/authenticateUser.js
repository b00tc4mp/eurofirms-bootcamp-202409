import { User } from '../data/models.js'
import { Validate, errors } from 'com'

const { SystemError, CredentialsError } = errors

function authenticateUser(username, password) {
    Validate.username(username)
    Validate.password(password)

    return User.findOne({ username, password })
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new CredentialsError('wrong credentials')

            return user._id.toString()
        })
}

export default authenticateUser