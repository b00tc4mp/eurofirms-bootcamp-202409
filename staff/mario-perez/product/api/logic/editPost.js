// validar datos
// (id usuario, id post, texto)
// si existe el usuario, el post, y si el post pertenece al usuario
// cambiar texto

import { User, Post } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError, OwnershipError } = errors

function editPost(userId, postId, text) {
    // validar datos
    validate.userId(userId)
    validate.postId(postId)
    validate.text(text)

    return Promise.all([
        User.findById(userId).lean(),
        Post.findById(postId).lean()
    ]) //coge un array de promesas
        .catch(error => { throw new SystemError(error.message) })
        //Solo cuando todas esas promesas se hayan hecho hace lo siguiente
        .then(userAndPost => {// paso como parametro userAndPost, el array devuelto
            const [user, post] = userAndPost

            // Usuario
            if (!user)
                throw new NotFoundError('user not found')

            // Post
            if (!post)
                throw new NotFoundError('post not found')

            // El post pertenece al usuario
            if (post.author.toString() !== userId)
                throw new OwnershipError('user is not author of post')

            // cambiar image, text y date
            return Post.updateOne({ _id: postId }, { text: text })

        })
        .then(_ => { })
}

export default editPost
