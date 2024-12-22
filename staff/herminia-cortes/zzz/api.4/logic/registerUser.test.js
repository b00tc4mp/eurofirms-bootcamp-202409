import mongoose from 'mongoose'
import registerUser from './registerUser.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        try {
            return registerUser('Peter Pan', 'Peter@pan.con', 'peterpan', '123123123')
                .then(() => console.log('user registered'))
                .cath(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    
    })
    .then(() => console.log('the end'))
    .cath(error => console.error(error))
    .finally(() => mongoose.disconnet())
   