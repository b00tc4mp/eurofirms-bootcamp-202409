import mongoose from 'mongoose'
import chat from './chat.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return chat('675abdd0bf6a9ce03a5c4830', '675800f353d3d48630f4d250', 'this is the sixth text message from chat.test.js')
                .then(() => console.log('message sent succesfully'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())