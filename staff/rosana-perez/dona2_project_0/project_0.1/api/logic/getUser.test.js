import mongoose from 'mongoose'
import getUser from './getUser.js'
import { User } from '../data/models.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return getUser('6765beeed639a9034f2f0d1f', '6765beeed639a9034f2f0d1f')
                .then(user => console.log(user))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(() => console.error(error))
    .finally(() => mongoose.disconnect())