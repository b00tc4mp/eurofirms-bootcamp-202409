import mongoose from 'mongoose'
import sendMessage from './sendMessage.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return sendMessage('675b423a21462281f2edbda1', '675b423a21462281f2edbda0', '675b423a21462281f2edbda3', 'message from logic/sendMessage.test')
                .then(() => console.log('message sent succesfully'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())