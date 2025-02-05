import { User, Item } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getItem(userId, itemId) {
    userId && validate.userId(userId)
    validate.itemId(itemId)

    const userPromise = userId && User.findById(userId).lean() || Promise.resolve(null)
    const itemPromise = Item.findById(itemId, '-__v').populate('author', 'username _id').lean()

    return Promise.all([userPromise, itemPromise])
        .then(([user, item]) => {

            if (!item) throw new NotFoundError('item not found')

            item.id = item._id.toString()
            delete item._id

            if (user) {
                item.own = item.author._id.toString() === userId.toString()

                item.fav = user.favs?.some(itemObjectId => {
                    return itemObjectId.toString() === item.id
                })
            } else if (!user) {
                item.own = false
                item.fav = false
            }

            return item
        })
        .catch(error => { throw new SystemError(error.message) })

}

export default getItem
