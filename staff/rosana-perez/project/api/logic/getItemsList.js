import { Item } from '../data/models.js'
import { errors } from 'com'

const { SystemError } = errors

function getItemsList() {

    return Item.find({}, '-__v')
        .populate('author', 'username _id')
        .sort({ date: -1 })
        .lean()

        .then(items => {
            items.forEach(item => {
                item.id = item._id.toString()
                delete item._id

                if (item.author && item.author._id) {
                    item.author.id = item.author._id.toString()
                    delete item.author._id
                }
            })

            return items
        })
        .catch(error => { throw new SystemError(error.message) })
}
export default getItemsList