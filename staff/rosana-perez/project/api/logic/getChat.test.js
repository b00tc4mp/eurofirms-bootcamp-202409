import mongoose from 'mongoose'
import getChat from './getChat.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return getChat('676d88c32985eb151fdf75fa', '6786b0434f3a3c49cf4cef8b')
                .then(chat => console.dir(chat, { depth: 3 }))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())