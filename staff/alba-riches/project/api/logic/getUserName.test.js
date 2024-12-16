import mongoose from 'mongoose'
import getUserName from './getUserName.js'

mongoose.connect('mongodb://127.0.0.1:27017/fixloop_test')
    .then(() => {
        try {
            return getUserName('675f28a0db7fe9ef99b0ce68', '675f363f910a2bbab10d8190')//producto??
                .then(name => console.log(name))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())