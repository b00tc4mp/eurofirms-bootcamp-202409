import mongoose from 'mongoose'
import { User, Item } from './models.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    //.then(() => User.deleteMany())
    //.then(() => Item.deleteMany())

    .then(() => {
        const user1 = new User({ name: 'User One', location: 'City', email: 'user@one.com', username: 'userone', password: '123123123' })
        const user2 = new User({ name: 'User Two', location: 'City', email: 'user@two.com', username: 'usertwo', password: '123123123' })
        const user3 = new User({ name: 'User Three', location: 'City', email: 'user@three.com', username: 'userthree', password: '123123123' })

        const itemOfUser1 = new Item({ author: user1._id, location: 'Vigo', image: 'https://www.clarin.com/2024/03/13/Jm3lXndQW_2000x1500__1.jpg', text: 'books on free from Vigo', description: 'testing' })
        const itemOfUser2 = new Item({ author: user2._id, location: 'Pontevedra', image: 'https://letsfamily.es/wp-content/uploads/2017/09/ropa-bebe-usada.jpg', text: 'clothes of babies', description: 'testing 2' })
        const itemOfUser3 = new Item({ author: user3._id, location: 'Santiago', image: 'https://globaltextiletrading.com/wp-content/uploads/2020/02/hard-soft-toys-2.jpg', text: 'teddys, and other toys', description: 'testing 3' })

        return Promise.all([
            user1.save(),
            user2.save(),
            user3.save(),
            itemOfUser1.save(),
            itemOfUser2.save(),
            itemOfUser3.save()
        ])
    })

    .then(elements => {
        const [user1, user2, user3, itemOfUser1, itemOfUser2, itemOfUser3] = elements

        console.log(user1, user2, user3, itemOfUser1, itemOfUser2, itemOfUser3)
    })

    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())