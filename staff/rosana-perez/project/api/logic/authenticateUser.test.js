import mongoose from 'mongoose'
import autenticateUser from './authenticateUser.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            return autenticateUser('elenarios', '123123123')
                .then(userId => console.log(userId))
                .catch(error => console.error(error))

        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())