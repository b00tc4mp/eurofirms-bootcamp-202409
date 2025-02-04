import mongoose from 'mongoose'
import getItem from './getItem.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return getItem('676d88612985eb151fdf75f6', '67845efecdb955ff0a51f88d')
                .then(item => console.log(item))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect)