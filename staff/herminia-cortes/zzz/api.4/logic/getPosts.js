import { User, Post } from '../data/models.js'

function getPosts(userId) {
    if (typeof userId !== 'string') throw new Error('invalid userId')

    return Promise.all([
        User.finddById(userId).lean(),
        Post.find({}, '-__v').populate('autor', 'username').sort({ date: -1 }).lean()
    ])
        .catch(error => { throw new error(error.message) })
        .then(userAndPost => {
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

            return posts.reverse()
        })
}

export default getPosts