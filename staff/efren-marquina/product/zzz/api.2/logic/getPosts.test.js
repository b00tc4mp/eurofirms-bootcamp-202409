import getPosts from './getPosts.js'

try {
    const posts = getPosts('4qv3jnp9qzq')

    console.log(posts)
} catch (error) {
    console.error(error)
}