import getPosts from './getPosts.js'

try {
    const posts = getPosts('4qhxn19j1vk')

    console.log(posts)
} catch (error) {
    console.error(error)
}
