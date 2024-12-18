import mongoose from 'mongoose'
import getUser from './getUser.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return getUser('6761c288f0c47719943647fc', '6761c288f0c47719943647fc')
                .then(name => console.log(name))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(() => console.error(error))
    .finally(() => mongoose.disconnect())