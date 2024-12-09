import { User, Item } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getItems(userId) {
    validate.userId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Item.find({}, '-_v').populate('author', 'username').sort({ date: -1 }).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndItems => {
            const [user, items] = userAndItems

            if (!user) throw new NotFoundError('user not found')

            items.forEach(item => {
                item.id = item._id.toString()
                delete item._id

                if (item.author._id) {
                    item.author.id = item.author._id.toString()

                    delete item.author._id
                }

                item.own = item.author.id === userId

                item.author = item.author.username
            })
            return items
        })
}

export default getItems