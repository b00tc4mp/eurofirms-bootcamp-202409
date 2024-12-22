import getPosts from './getPosts.js'

try {
    const posts = getPosts('4qghhowdc64')

    console.log(posts)
} catch (error) {
    console.error(error)

}