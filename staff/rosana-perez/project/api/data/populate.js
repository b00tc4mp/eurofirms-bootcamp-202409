import mongoose from 'mongoose'
import { User, Post } from './models.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    //.then(() => User.deleteMany())
    //.then(() => Post.deleteMany())

    .then(() => {
        const maria = new User({ name: 'Maria Lopez', city: 'Vigo', email: 'maria@lopez.com', username: 'marialopez', password: '123123123' })
        const elena = new User({ name: 'Elena Rios', city: 'Pontevedra', email: 'elena@rios.com', username: 'elenarios', password: '123123123' })
        const suri = new User({ name: 'Suri Cata', city: 'Santiago', email: 'suri@cata.com', username: 'suricata', password: '123123123' })

        const postOfMaria = new Post({ author: maria._id, image: 'https://www.clarin.com/2024/03/13/Jm3lXndQW_2000x1500__1.jpg', text: 'books on free from Vigo' })
        const postOfElena = new Post({ author: elena._id, image: 'https://letsfamily.es/wp-content/uploads/2017/09/ropa-bebe-usada.jpg', text: 'clothes of babies' })
        const postOfSuri = new Post({ author: suri._id, image: 'https://globaltextiletrading.com/wp-content/uploads/2020/02/hard-soft-toys-2.jpg', text: 'teddys, and other toys' })

        return Promise.all([
            maria.save(),
            elena.save(),
            suri.save(),
            postOfMaria.save(),
            postOfElena.save(),
            postOfSuri.save()
        ])
    })

    .then(elements => {
        const [maria, elena, suri, postOfMaria, postOfElena, postOfSuri] = elements

        console.log(maria, elena, suri, postOfMaria, postOfElena, postOfSuri)
    })

    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())