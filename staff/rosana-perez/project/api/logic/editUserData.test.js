import mongoose from "mongoose"
import editUserData from './editUserData.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return editUserData('676d88c32985eb151fdf75fa', 'User Five Edited', 'city edited', 'userfive@edited.com', 'userfiveedited', '234234234')
                .then(() => console.log('user profile edited'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())
// order of data: userId, name, location, email, username, password