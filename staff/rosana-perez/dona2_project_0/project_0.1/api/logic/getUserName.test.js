import mongoose from 'mongoose'
import getUserName from './getUserName.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return getUserName('6765beeed639a9034f2f0d1f', '6765beeed639a9034f2f0d1f')
                .then(name => console.log(name))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(() => console.error(error))
    .finally(() => mongoose.disconnect())