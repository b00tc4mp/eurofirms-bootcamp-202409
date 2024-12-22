import fs from 'fs'

function getPosts(userId) {
    if (typeof userId !== 'string') throw new Error('invalid userId')
    
    const usersJSON = fs.readFileSync('data/users.json', 'utf8')
    const users = JSON.parse(usersJSON) 
    
    const user =users.find(user => user.id === userId)

    if (!user) throw new Error('user not found')

    const postsJSON = fs.readFileSync('data/posts.json', 'utf8')
    const posts = JSON.parse(postsJSON)

    posts.forEach(post => {
        const author = users.find(user => user.id === post.author)

        if (!author) throw new Error('author of post not found')

        post.author = author.username
    })

    return posts.reverse()
}

export default getPosts