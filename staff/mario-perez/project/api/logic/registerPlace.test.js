import mongoose from 'mongoose'
import registerPlace from './registerPlace.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        try {
            return registerPlace('6765b5fc4016723ae53e9ebe', '6765b5fc4016723ae53e9ec3', '1', '2H', '2024-12-20T19:00:00.000Z', '2024-12-20T22:30:00.000Z')
                .then(() => console.log(' plaza registrada'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())