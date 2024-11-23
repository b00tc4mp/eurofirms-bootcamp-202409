import mongoose from 'mongoose'
import authenticateUser from './authenticateUser.js'

mongoose.connect('mongodb://127.0.01:27017/test')

try {
    const userId = authenticateUser('peterpan', '123123123')

    console.log(userId)

} catch (error) {
    console.error(error)
}