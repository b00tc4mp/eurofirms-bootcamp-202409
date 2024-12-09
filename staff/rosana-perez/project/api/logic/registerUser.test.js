import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test') //MONGO_URL)
    .then(() => {
        try {
            return registerUser('Dona2 User2', 'Vigo', 'dona2@user2.com', 'dona2user2', '123123123')
                .then(() => console.log('user registered'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())