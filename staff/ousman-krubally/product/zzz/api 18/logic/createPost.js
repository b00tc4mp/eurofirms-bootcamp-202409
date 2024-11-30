import { User, Post } from '../data/models.js'

function createPost(userId, image, text) {
    if (typeof userId !== 'string') throw new error('invalid userId')
    if (typeof image !== 'string') throw new error('invalid image')
    if (typeof text !== 'string') throw new Error('invalid text')
    
        return User.findById(userId).lean()
            .catch(error => { throw new Error(error.message) })
            .then(user => {
                if (!user) throw new Error('user not found')

                return Post.create({ author: userId, image, text })
                    .catch(error => { throw new Error(error.message) })
            })
            .then(_ ={ })
}

export default createPost