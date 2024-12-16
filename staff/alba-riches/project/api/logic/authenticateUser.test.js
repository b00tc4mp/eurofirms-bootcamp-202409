import mongoose from 'mongoose'
import authenticateUser from './authenticateUser.js'

mongoose.connect('mongodb://127.0.0.1:27017/fixloop_test')
    .then(() => {
        try {
            return authenticateUser('Albaches', '123123123')
                .then(userId => console.log(userId))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())