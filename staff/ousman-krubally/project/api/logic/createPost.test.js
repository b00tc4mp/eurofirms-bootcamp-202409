import mongoose from 'mongoose'
import createPost from './createPost.js'

mongoose.connect('mongodb://127.0.0.1:27017/mattas')
    .then(() => {
        try {
            return createPost('678f544d5cb0d15ed69235ee', 'https://imgs.search.brave.com/tSvtDl7zobwWUMYndATcl6706Te9elbLAQKzd3wtrD4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YWxmYWJldGFqdWVn/YS5jb20vYWxmYWJl/dGFqdWVnYS8yMDIw/LzA5L3RleGhub2x5/emUuanBn', 'i m the best')
                .then(() => console.log('post created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())