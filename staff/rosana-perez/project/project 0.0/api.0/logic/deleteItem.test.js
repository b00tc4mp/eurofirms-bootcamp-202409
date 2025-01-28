import mongoose from 'mongoose'
import deleteItem from './deleteItem.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return deleteItem('6754379a0832b016ede53079', '6756c914161fe9b6c4d5257c')
                .then(() => console.log('item deleted'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())