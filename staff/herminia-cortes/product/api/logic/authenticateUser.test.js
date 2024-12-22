import mongoose from 'mongosose'
import authenticateUser from './authenticateUser.js'

mongoose.connect('mongodb://127.0.01:27017/test')
    .then(() => {
        try {
            return authenticateUser('peterpan', '123123123')
                .then(userId => console.log(userId))
                .catch(error => console.error(error))
            } catch (error) {
                console.error(error)
            }
        })
        .then(() => console.log('the end')
        .catch(error => console.error(error))
        .finally(() => mongoose.disconnect))
