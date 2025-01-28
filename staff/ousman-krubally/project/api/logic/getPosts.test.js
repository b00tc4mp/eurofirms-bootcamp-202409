import mongoose from 'mongoose'
import getPosts from './getPosts'

mongoose.connect('mongodb://127.0.0.1:27017/mattas')
    .then(() => {
        try {
            return getPosts('')
                .then(posts => console.log(posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect)