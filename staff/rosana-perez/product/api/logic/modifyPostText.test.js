import mongoose from 'mongoose'
import modifyPostText from './modifyPostText.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            return modifyPostText('674251b55de4e58afc897f4e', '674e0e3f2031f05ac9cebee1', 'this is my machine')
                .then(() => console.log('post modified'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())