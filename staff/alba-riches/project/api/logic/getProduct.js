import { User, Product } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getProducts(userId) {
    validate.userId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Product.find({}, '-__v').populate('author', 'username').sort({ date: -1 }).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndProducts => {
            const [user, products] = userAndProducts

            if (!user) throw new NotFoundError('user not found')

            products.forEach(product => {
                product.id = product._id.toString()
                delete product._id

                if (product.author._id) {
                    product.author.id = product.author._id.toString()

                    delete product.author._id
                }

                product.own = product.author.id === userId

                product.author = product.author.username
            })

            return products
        })
}

export default getProducts
