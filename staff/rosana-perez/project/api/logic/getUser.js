import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getUser(userId, targetUserId) {
    validate.userId(userId)
    validate.targetUserId(targetUserId)

    return Promise.all([
        User.findById(userId),
        User.findById(targetUserId, '-__v').lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(users => {
            const [user, targetUser] = users

            if (!user) throw new NotFoundError('user not found')
            if (!targetUser) throw new NotFoundError('target user not found')

            if (!targetUser.favourites) { targetUser.favourites = [] }

            targetUser.favourites = targetUser.favourites.map(item => {
                return {
                    id: item._id.toString(),
                    ...item.toObject()
                }
            })

            users.forEach(user => {
                user.id = user._id.toString()
                delete user._id
                delete user.password
            })
            return targetUser
        })
}
export default getUser