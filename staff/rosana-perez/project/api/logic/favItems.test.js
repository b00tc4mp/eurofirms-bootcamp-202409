import mongoose from 'mongoose'
import favItems from './favItems.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return favItems('6765beeed639a9034f2f0d1f')
                .then(favItems => console.log(favItems))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())