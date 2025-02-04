import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getUserName(userId, targetUserId) {
    validate.userId(userId)
    validate.targetUserId(targetUserId)

    return Promise.all([
        User.findById(userId),
        User.findById(targetUserId).select('-__v -_id').lean()
    ])
        .then(users => {
            const [user, targetUser] = users

            if (!user) throw new NotFoundError('user not found')
            if (!targetUser) throw new NotFoundError('target user not found')

            return targetUser.name
        })
        .catch(error => { throw new SystemError(error.message) })
}
export default getUserName