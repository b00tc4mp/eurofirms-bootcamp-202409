import mongoose from 'mongoose'
import getItem from './getItem.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return getItem('6765beeed639a9034f2f0d1f', '6765beeed639a9034f2f0d24')
                .then(item => console.log(item))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect)