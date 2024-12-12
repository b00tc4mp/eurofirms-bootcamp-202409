import { User, Product } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError, OwnershipError } = errors

function deleteProduct(userId, productId) {
    validate.userId(userId)
    validate.productId(productId)

    return Promise.all([
        User.findById(userId).lean(),
        Product.findById(productId).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(userAndProduct => {
            const [user, product] = userAndProduct

            if (!user) throw new NotFoundError('user not found')
            if (!product) throw new NotFoundError('product not found')

            if (product.author.toString() !== userId) throw new OwnershipError('user is not author of product')

            return Product.deleteOne({ _id: product._id })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(_ => { })
}

export default deleteProduct
