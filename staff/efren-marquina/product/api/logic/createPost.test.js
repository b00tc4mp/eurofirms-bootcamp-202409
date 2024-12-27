import createPost from './createPost.js'

try {
    createPost('4qv6d1gy7ok', 'https://cdn-icons-png.flaticon.com/512/5986/5986331.png', 'hola mundo')
} catch (error) {
    console.error(error)
}