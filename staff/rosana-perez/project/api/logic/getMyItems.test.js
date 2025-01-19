import mongoose from 'mongoose'
import getMyItems from './getMyItems.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return getMyItems('678b954de22738643f56e4a9')
                .then(items => console.log(items))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())