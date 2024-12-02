import mongoose from 'mongoose'
import getUserName from './getUserName.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            return getUserName('674251b55de4e58afc897f4f', '674251b55de4e58afc897f4f')
                .then(name => console.log(name))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())



