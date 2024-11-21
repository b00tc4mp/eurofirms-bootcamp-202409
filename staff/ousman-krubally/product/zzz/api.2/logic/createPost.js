import fs from 'fs'
import uuid from '../util/uuid.js'

function createPost(userId, image, text) {
    if (typeof userId !== 'string') throw new error('invalid userId')
    if (typeof image !== 'string') throw new error('invalid image')
    if (typeof text !== 'string') throw new Error('invalid text')

    const usersJSON = fs.readFileSync('data/users.json', 'utf8')
    const users = JSON.parse(usersJSON)

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('user not found')

    let postsJSON = fs.readFileSync('data/posts.json', 'utf8')
    const posts = JSON.parse(postsJSON)

    const post = {
        id: uuid(),
        author: userId,
        image,
        text,
        date: new Date().toISOString()
    }

    posts.push(post)

    postsJSON = JSON.stringify(posts)
    fs.writeFileSync('data/posts.json', postsJSON)
}

export default createPost