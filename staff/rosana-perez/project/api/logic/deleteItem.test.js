import mongoose from 'mongoose'
import deleteItem from './deleteItem.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return deleteItem('67a26d197918745e1fca1da8', '67a26e2f2717aa845b2cac57')
                .then(() => console.log('item deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())