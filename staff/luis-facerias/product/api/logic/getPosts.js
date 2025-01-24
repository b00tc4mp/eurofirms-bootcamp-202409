import { User, Post } from '../data/models.js'
import { validate } from 'com'

function getPosts(userId) {
    validate.userId(userId)

    return Promise.all([
        User.findById(userId).lean(),
        Post.find({}, '-__v').populate('author', 'username').sort({ date: -1 }).lean()
    ])
        .catch(error => { throw new Error(error.message) })
        .then(userAndPosts => {
            const [user, posts] = userAndPosts

            if (!user) throw new Error('user not found')

            posts.forEach(post => {
                post.id = post._id.toString()
                delete post._id

                if (post.author._id) {
                    post.author.id = post.author._id.toString()

                    delete post.author._id
                }

                post.own = post.author.id === userId

                post.author = post.author.username
            })

            return posts
        })
}

export default getPosts