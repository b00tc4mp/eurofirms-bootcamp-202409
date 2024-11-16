import getPosts from './getPosts.js'

try {
    const posts = getPosts('4qh4hc5vzdu')

    console.log(posts)
} catch(error) {
    console.error(error)
}
