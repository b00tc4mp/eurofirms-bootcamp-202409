import mongoose from 'mongoose'
import toggleFav from './toggleFav.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    .then(() => {
        try {
            return toggleFav('6761cf9a04294e6631323165', '6761cf9a04294e6631323166')
                //userId                      itemId
                .then(() => console.log('item updated in user favs'))
                .catch(error => console.error(error))
        } catch (error) {
            console.error(error)
        }
    })
    .then(() => console.log('end of test'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())