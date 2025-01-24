import { User, Post } from '../data/models.js'
import { validate } from 'com'

function createPost(userId, image, text) {
    validate.userId(userId)
    validate.image(image)
    validate.text(text)

    return User.findById(userId).lean()
        .catch(error => { throw new Error(error.message) })
        .then(user => {
            if (!user) throw new Error('user not found')

            return Post.create({ author: userId, image, text })
                .catch(error => { throw new Error(error.message) })
        })
        .then(_ => { })
}

export default createPost