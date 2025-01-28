import { User, Item } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getItems(userId) {
    validate.userId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Item.find({}, '-__v').populate('author', 'username _id').populate('sold').sort({ date: -1 }).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndItems => {
            const [user, items] = userAndItems

            if (!user) throw new NotFoundError('user not found')


            items.forEach(item => {
                item.id = item._id.toString()
                delete item._id

                // check if author exists (otherwise _id would be null and throws http 500)
                if (item.author && item.author._id) {
                    item.author.id = item.author._id.toString()
                    delete item.author._id
                }

                item.own = item.author?.id === userId.toString()

                item.fav = user.favs?.some(itemObjectId => {
                    return itemObjectId.toString() === item.id
                })
            })

            return items
        })
}

export default getItems