import mongoose from 'mongoose'
import createItem from './createItem.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return createItem('676d88612985eb151fdf75f6', 'Pontevedra', 'https://www.clarin.com/2024/03/13/Jm3lXndQW_2000x1500__1.jpg', 'books on free from Vigo', 'description test', true)
                .then(() => console.log('item created'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())