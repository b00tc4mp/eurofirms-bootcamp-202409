import { User, Item } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getItems(userId) {
    validate.userId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Item.find({}, '-__v').populate('author', 'username _id').sort({ date: -1 }).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndItems => {
            const [user, items] = userAndItems

            if (!user) throw new NotFoundError('user not found')

            // const favItems = []
            // user.favourites.forEach((objectId) => {
            //     favItems.push(objectId.toString())
            // })

            items.forEach(item => {
                item.id = item._id.toString()
                delete item._id

                // check if author exists (otherwise _id would be null and throws http 500)
                if (item.author && item.author._id) {
                    item.author.id = item.author._id.toString()
                    delete item.author._id
                }

                item.own = item.author?.id === userId.toString()

                // item.fav = favItems.includes(item.id)
            })

            /* for (let i = 0; i < user.favourites.length; i++) {
                for (let j = 0; j < items.lenght; j++) {
                    if (user.favourites[i].toString() == items[j].id) {
                        items[j].favourite = true
                    }
                }
            } */

            return items
        })
}

export default getItems