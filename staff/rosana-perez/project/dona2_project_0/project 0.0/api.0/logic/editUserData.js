import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function editUserData(userId, name, location, email, username, password) {
    validate.userId(userId)
    validate.name(name)
    /* validate.location(location) */
    validate.email(email)
    validate.username(username)
    validate.password(password)

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {

            if (!user) throw new NotFoundError('user not found')

            return User.updateOne(
                { _id: userId },
                {
                    $set: { name, location, email, username, password }
                }
            )

                .catch(error => { throw new SystemError(error.message) })
        })
        .then(updatedUser => { })

}

export default editUserData

