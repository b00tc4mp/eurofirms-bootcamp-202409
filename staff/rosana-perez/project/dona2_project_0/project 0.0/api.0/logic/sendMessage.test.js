import mongoose from 'mongoose'
import sendMessage from './sendMessage.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return sendMessage('6765beeed639a9034f2f0d1f', 'message from userone to userfive chatId && !itemId', '678164d23d3069c4c7e45098', '',
            )
                .then(() => console.log('message sent succesfully'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())