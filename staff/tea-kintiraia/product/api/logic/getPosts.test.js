import getPosts from './getPosts.js'

try {
    const posts = getPosts('4qg7lopxuhs')

    console.log(posts)
} catch (error) {
    console.error(error)
}