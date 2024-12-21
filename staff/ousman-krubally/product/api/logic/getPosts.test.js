import mongoose from 'mongoose'
import getPosts from './getPosts.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            return getPosts('674a3fd9a081a9e0cded3a7a')
                .then(posts => console.log(posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('then end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())