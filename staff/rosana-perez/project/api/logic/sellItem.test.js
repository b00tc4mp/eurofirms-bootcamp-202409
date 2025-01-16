import mongoose from 'mongoose'

import sellItem from './sellItem.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return sellItem('676d88c32985eb151fdf75fa', '6788094c96e06c838c0011e1')
                .then(() => console.log('item sold'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())