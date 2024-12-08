import { User, Item } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function createItem(userId, location, image, text) {
    validate.userId(userId)
    validate.location(location)
    validate.image(image)
    validate.text(text)

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Item.create({ author: userId, location, image, text })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(_ => { })
}

export default createItem