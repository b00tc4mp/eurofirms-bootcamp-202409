import mongoose from 'mongoose'
import sendMessage from './sendMessage.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return sendMessage('676144818b9d35f59fa14c87', '675f3a65c4a0c3b6e1868e43', '675f3a65c4a0c3b6e1868e40', 'testing 2 addition to mongo user')
                .then(() => console.log('message sent succesfully'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())