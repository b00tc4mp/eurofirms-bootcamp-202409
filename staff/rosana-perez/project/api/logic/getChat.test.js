import mongoose from 'mongoose'
import getChat from './getChat.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return getChat('6765beeed639a9034f2f0d20', '6778531a9458ab128a49d2c1')
                .then(chat => console.dir(chat, { depth: 3 }))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())