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
        .catch(error => { throw new SystemError(error.message) })
        .then(users => {
            const [user, targetUser] = users

            if (!user) throw new NotFoundError('user not found')
            if (!targetUser) throw new NotFoundError('target user not found')

            /* if (!user.favs) { user.favs = [] }

            targetUser.favs = targetUser.favs || [] */

            /*  targetUser.favs.forEach((favItem) => {
                 favItem = favItem.toString()
             }) */

            /*   for (let i = 0; i < targetUser.favs.length; i++) {
                  targetUser.favs[i] = targetUser.favs[i].toString()
              } */

            /* targetUser.favs = targetUser.favs.map(favItem => favItem.toString()) */

            return targetUser.name
        })
}
export default getUserName