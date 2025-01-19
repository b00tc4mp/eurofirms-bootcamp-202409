import { User, Item } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getMyItems(userId) {
    validate.userId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Item.find({ author: userId }).select('-__v -author').sort({ date: -1 }).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndItems => {
            const [user, items] = userAndItems

            if (!user) throw new NotFoundError('user not found')

            items.forEach(item => {
                if (item._id) {
                    item.id = item._id.toString()
                    delete item._id
                }
            })
            return items
        })
}

export default getMyItems