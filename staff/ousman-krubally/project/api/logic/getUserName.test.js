import mongoose from 'mongoose'
import getUserName from './getUserName.js'

mongoose.connect('mongodb://127.0.0.1:27017/mattas')
    .then(() => {
        try {
            return getUserName('678f544d5cb0d15ed69235ee', '678f544d5cb0d15ed69235ee')
            .then(name => console.log(name))
            .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('then end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())