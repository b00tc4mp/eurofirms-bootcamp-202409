import fs from 'fs'

function deletePost(userId, postId) {
    if (typeof userId !== 'string') throw new Error('invalid userId')
    if (typeof postId !== 'string') throw new Error('invalid postId')

    const usersJSON = fs.readFileSync('data/users.json', 'utf8')
    const users = JSON.parse(usersJSON)

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('user not found')

    let postsJSON = fs.readFileSync('data/posts.json', 'utf8')
    const posts = JSON.parse(postsJSON)

    const index = posts.findIndex(post => post.id === postId)

    if (index < 0) throw new Error('post not found')

    const post = posts[index]

    if (post.author !== userId) throw new Error('user is not author of post')

    posts.splice(index, 1)

    postsJSON = JSON.stringify(posts)
    fs.writeFileSync('data/posts.json', postsJSON)
}

export default deletePost