import { User, Product } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function createProduct(userId, image, text, description, phone) {
    validate.userId(userId)
    validate.image(image)
    validate.text(text)
    validate.description(description)
    validate.phone(phone)

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Product.create({ author: userId, image, text })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(_ => { })
}

export default createProduct