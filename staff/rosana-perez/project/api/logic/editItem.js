import { User, Item } from '../data/models.js'
import { validate, errors } from 'com'


const { SystemError, NotFoundError, OwnershipError } = errors

function editItem(userId, itemId, text) {
    validate.userId(userId)
    validate.itemId(itemId)
    validate.text(text)

    return Promise.all([
        User.findById(userId).lean(),
        Item.findById(itemId).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(([user, item]) => {

            if (!user) throw new NotFoundError('user not found')
            if (!item) throw new NotFoundError('item not found')

            if (item.author.toString() !== userId) throw new OwnershipError('user is not author of item')

            return Item.updateOne({ _id: item._id }, { 'title': text })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(_ => { })
}

export default editItem