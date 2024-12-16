import mongoose from 'mongoose'
import createProduct from './createProduct.js'

mongoose.connect('mongodb://127.0.0.1:27017/fixloop_test')
    .then(() => {
        try {
            return createProduct('675f28a0db7fe9ef99b0ce68', 'https://m.media-amazon.com/images/I/71WFual8KQS.jpg', 'rtx 3060', 'tarjeta grafica super nueva')
                .then(() => console.log('product created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())