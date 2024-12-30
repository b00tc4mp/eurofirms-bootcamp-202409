import mongoose from 'mongoose'
import getMessagesOut from './getMessagesOut.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return getMessagesOut('676d88612985eb151fdf75f6')
                .then(messages => console.log(messages))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())