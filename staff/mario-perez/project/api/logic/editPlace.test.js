import mongoose from 'mongoose'
import editPlace from './editPlace.js'

mongoose.connect('mongodb://127.0.0.1:27017/project')
    .then(() => {
        try {
            return editPlace('67842bbe1d15249790c8a555', '67842bbe1d15249790c8a55e', '67842bbe1d15249790c8a55c', 1, '2G', '2024-12-15T08:00:00.000Z', '2024-12-20T18:00:00.000Z')
                .then(() => console.log(' plaza editada'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())