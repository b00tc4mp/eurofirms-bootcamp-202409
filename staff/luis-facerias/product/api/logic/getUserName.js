import { User } from '../data/models.js'
import { validate } from 'com'

function getUserName(userId, targetUserId) {
    validate.userId(userId)
    validate.targetUserId(targetUserId)

    return Promise.all([
        User.findById(userId),
        User.findById(targetUserId)
    ])
        .catch(error => { throw new Error(error.message) })
        .then(users => {
            const [user, targetUser] = users

            if (!user) throw new Error('user not found')
            if (!targetUser) throw new Error('target user not found')

            return targetUser.name
        })
}

export default getUserName