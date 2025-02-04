import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getUser(userId) {
    validate.userId(userId)

    return User.findById(userId).select('-__v -password -favs').lean()
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            user.id = user._id.toString()
            delete user._id

            return user
        })
        .catch(error => { throw new SystemError(error.message) })
}
export default getUser