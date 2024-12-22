import { User } from '../data/models.js'

function getUserName(userId, targetUserId) {
    if (typeof userId !== 'string') throw new Error('invalid userId')
    if (typeof targetUserId !== 'string') throw new Error('invalid targetUserId')

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