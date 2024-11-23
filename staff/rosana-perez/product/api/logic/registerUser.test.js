import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect('mongodb://127.0.01:27017/test')
    .then(() => registerUser('Peter Pan', 'peter@pan.com', 'peterpan', '123123123'))
    .catch(error => console.error(error))
