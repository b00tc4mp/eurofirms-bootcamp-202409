import { User, Product } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function createProduct(userId, image, title, description) {
    validate.userId(userId)
    validate.image(image)
    validate.text(title)
    validate.description(description)

    return User.findById(userId).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            return Product.create({ author: userId, image, title, description, phone: user.phone })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(_ => { })
}

export default createProduct