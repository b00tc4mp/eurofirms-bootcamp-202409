import { User, Post } from '../data/models.js'

function getPosts(userId) {
    if (typeof userId !== 'string') throw new Error('invalid userId')

    return Promise.all([
        User.findById(userId).lean(),
        Post.find({}, '-__v').populate('author', 'username').sort({ date: -1 }).lean()
        // devuelve la fecha de manera inversa usando sort,mas reciente primero,y lean te trae directamente los objetos de la base de datos( lo organiza)
    ])// populate ,para que aparezca el nombre del usuario y no el id
        .catch(error => { throw new Error(error.message) })
        .then(userAndPosts => {
            const [user, posts] = userAndPosts // buscar usuarios y posts

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