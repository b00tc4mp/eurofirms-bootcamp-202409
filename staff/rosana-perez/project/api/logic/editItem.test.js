import mongoose from 'mongoose'
import editItem from './editItem.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return editItem('67a26d197918745e1fca1da9', '67a26d197918745e1fca1dac', 'this is a edited text')
                .then(() => console.log('item modified'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())