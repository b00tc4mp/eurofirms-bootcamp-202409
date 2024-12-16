import mongoose from 'mongoose'
import getProducts from './getProducts.js'

mongoose.connect('mongodb://127.0.0.1:27017/fixloop_test')
    .then(() => {
        try {
            return getProducts('675f28a0db7fe9ef99b0ce68')// id de un producto??
                .then(posts => console.log(posts))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())