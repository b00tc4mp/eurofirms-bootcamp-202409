import { User, Post } from '../data/models.js'

function deletePost(userId, postId) {
    if (typeof userId !== 'string') throw new Error('invalid userId')
    if (typeof postId !== 'string') throw new Error('invalid postId')

    return Promise.all([
        User.findById(userId).lean(),
        Post.findById(postId).lean()
    ])
        .catch(error => { throw new Error(error.message) })
        .then(userAndPost => {
            const [user, post] = userAndPost

            if (!user) throw new Error('user not found')
            if (!post) throw new Error('post not found')

            if (post.author.toString() !== userId) throw new Error('user is not author os post')

            return Post.deleteOne({ _id: post._id })
                .catch(error => { throw new Error(error.message) })
        })
        .then(_ => { })
}

export default deletePost