import mongoose from 'mongoose'
import getFavItems from './getFavItems.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return getFavItems('6765beeed639a9034f2f0d1f')
                .then(getFavItems => console.log(getFavItems))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())