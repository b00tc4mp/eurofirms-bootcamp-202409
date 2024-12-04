// obtener el post a retornar
// validar userId === post.userId
// retornar post modificado con otro texto

//(userId, text)

import { User, Post } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError, OwnershipError } = errors

function modifyPostText(userId, postId, text) {
    validate.userId(userId)
    validate.postId(postId)
    validate.text(text)

    return Promise.all([
        User.findById(userId).lean(),
        Post.findById(postId).lean()
    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(([user, post]) => {


            if (!user) throw new NotFoundError('user not found')
            if (!post) throw new NotFoundError('post not found')

            if (post.author.toString() !== userId) throw new OwnershipError('user is not author of post')

            //return Promise.all([Post.deleteOne({ _id: post._id }), Post.create({ _id: post._id, author: userId, image: post.image, text: text })])
            return Post.updateOne({ _id: post._id }, { text: text })
                .catch(error => { throw new SystemError(error.message) })

        })
        .then(_ => { })
}

export default modifyPostText