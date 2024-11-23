import mongoose from 'mongoose'
import deletePost from './deletePost.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            return deletePost('674251b55de4e58afc897f50', '67425aa91b1e6c5a80cf4295')
                .then(() => console.log('post deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
