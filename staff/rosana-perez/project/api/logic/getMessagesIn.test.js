import mongoose from 'mongoose'
import getMessagesIn from './getMessagesIn.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return getMessagesIn('6765beeed639a9034f2f0d1f')
                .then(messages => console.log(messages))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())