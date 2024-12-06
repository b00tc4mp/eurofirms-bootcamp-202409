import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect('mongodb://127.0.0.1:27017/test') //MONGO_URL)
    .then(() => {
        try {
            registerUser('Dona2 User1', 'Vigo', 'dona2@user1.com', 'dona2user1', '123123123')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())