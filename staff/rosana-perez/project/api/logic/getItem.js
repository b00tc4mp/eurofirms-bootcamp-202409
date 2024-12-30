import { User, Item } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getItem(userId, itemId) {
    validate.userId(userId)
    validate.itemId(itemId)

    return Promise.all([
        User.findById(userId).lean(),
        Item.findById(itemId, '-__v').populate('author', 'username -_id').lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndItem => {
            const [user, item] = userAndItem

            if (!user) throw new NotFoundError('user not found')
            if (!item) throw new NotFoundError('item not found')

            item.id = item._id.toString()
            delete item._id

            item.own = item.author?.id === userId.toString()

            item.fav = user.favs?.some(itemObjectId => {
                return itemObjectId.toString() === item.id
            })

            return item
        })
}

export default getItem
