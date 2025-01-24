import mongoose from 'mongoose'
import updatePost from './updatePost.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            //userId  -  postId  -  comment
            return updatePost('676ae12e07ed1f08ace49df6', '6792ab9d36be80d3505d7f0b', 'Me llamo Pepiiiiito!!!!')
                .then(() => console.log('post modified'))
                .catch(error => console.log(error))
        }catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())