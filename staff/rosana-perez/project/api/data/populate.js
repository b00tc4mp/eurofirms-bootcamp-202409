import mongoose from 'mongoose'
import { User, Item } from './models.js'

mongoose.connect('mongodb://127.0.0.1:27017/dona2-test')
    //.then(() => User.deleteMany())
    //.then(() => Item.deleteMany())

    .then(() => {
        const maria = new User({ name: 'Maria Lopez', location: 'Vigo', email: 'maria@lopez.com', username: 'marialopez', password: '123123123' })
        const elena = new User({ name: 'Elena Rios', location: 'Pontevedra', email: 'elena@rios.com', username: 'elenarios', password: '123123123' })
        const suri = new User({ name: 'Suri Cata', location: 'Santiago', email: 'suri@cata.com', username: 'suricata', password: '123123123' })

        const itemOfMaria = new Item({ author: maria._id, location: 'Vigo', image: 'https://www.clarin.com/2024/03/13/Jm3lXndQW_2000x1500__1.jpg', text: 'books on free from Vigo' })
        const itemOfElena = new Item({ author: elena._id, location: 'Pontevedra', image: 'https://letsfamily.es/wp-content/uploads/2017/09/ropa-bebe-usada.jpg', text: 'clothes of babies' })
        const itemOfSuri = new Item({ author: suri._id, location: 'Santiago', image: 'https://globaltextiletrading.com/wp-content/uploads/2020/02/hard-soft-toys-2.jpg', text: 'teddys, and other toys' })

        return Promise.all([
            maria.save(),
            elena.save(),
            suri.save(),
            itemOfMaria.save(),
            itemOfElena.save(),
            itemOfSuri.save()
        ])
    })

    .then(elements => {
        const [maria, elena, suri, itemOfMaria, itemOfElena, itemOfSuri] = elements

        console.log(maria, elena, suri, itemOfMaria, itemOfElena, itemOfSuri)
    })

    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())