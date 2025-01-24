import { User, Post } from '../data/models.js'
import { validate } from 'com'

function updatePost(userId, postId, text) {
    validate.userId(userId)
    validate.postId(postId)

    return Promise.all([
        User.findById(userId).lean(),
        Post.findById(postId).lean()
    ])
        .catch(error => { throw new Error(error.message) })
        .then(userAndPost => {
            const [user, post] = userAndPost

            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (post.author.toString() !== userId) throw new Error('user is not author of post')

            return Post.findOneAndUpdate(
                { _id: post._id}, { text: text })
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(_ => { })
}

export default updatePost