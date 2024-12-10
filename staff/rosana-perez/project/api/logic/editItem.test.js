import mongoose from 'mongoose'
import editItem from './editItem.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return editItem('675800f353d3d48630f4d251', '675800f353d3d48630f4d254', 'this is a edited text')
                .then(() => console.log('item modified'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())