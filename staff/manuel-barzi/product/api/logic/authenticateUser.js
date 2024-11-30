import { User } from '../data/models.js'
import { validate } from 'com'

function authenticateUser(username, password) {
    validate.username(username)
    validate.password(password)

    return User.findOne({ username, password })
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user) throw new Error('wrong credentials')

            return user._id.toString()
        })
}

export default authenticateUser