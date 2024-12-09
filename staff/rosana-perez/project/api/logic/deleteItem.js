import { User, Item } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError, OwnershipError } = errors

function deleteItem(userId, itemId) {
    validate.userId(userId)
    validate.itemId(itemId)

    return Promise.all([
        User.findById(userId).lean(),
        Item.findById(itemId).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndItem => {
            const [user, item] = userAndItem

            if (!user) throw new NotFoundError('user not found')
            if (!item) throw new NotFoundError('item not found')

            if (item.author.toString() !== userId) throw new OwnershipError('user is not author of item')

            return Item.deleteOne({ _id: item._id })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(_ => { })
}

export default deleteItem