import mongoose from 'mongoose'
import getChats from './getChats.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return getChats('676d88c32985eb151fdf75fa')
                .then(chats => console.dir(chats, { depth: 5 }))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())