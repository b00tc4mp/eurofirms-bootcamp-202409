import mongoose from 'mongoose'
import editPost from './editPost.js'


mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            return editPost('7461e5ba24b07bc2a3ca7b8', '674a2c5e8408f230e1beebec', 'ssssssssssssssssss')
                .then(() => console.log('post edited'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
