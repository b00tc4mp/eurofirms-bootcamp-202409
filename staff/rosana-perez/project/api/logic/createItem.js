import { User, Item } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function createItem(userId, location, image, title, description, type, sold) {
    validate.userId(userId)
    validate.image(image)
    validate.title(title)
    validate.description(description)
    validate.type(type)
    validate.sold(sold)

    return User.findById(userId).lean()
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Item.create({ author: userId, location, image, title, description, type, sold })
        })
        .catch(error => { throw new SystemError(error.message) })
        .then(itemCreated => { })

}


export default createItem