import mongoose, { mongo } from 'mongoose'
import { User, Post } from './models.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => User.deleteMany())
    .then(() => Post.deleteMany())
    // .then(() => {
    //     const user = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' })

    //     return user.save()
    // })
    // .then(user => console.log(user))
    // .then(() => User.create({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' }))
    // .then(() => User.create({ name: 'Campa Nilla', email: 'campa@nilla.com', username: 'campanilla', password: '123123123' }))
    // .then(() => User.create({ name: 'Peter Pan', email: 'peter@pan.com', username: 'peterpan', password: '123123123' }))
    // .then(() => User.create({ name: 'Wendy Darling', email: 'wendy@darling.com', username: 'wendydarling', password: '123123123' }))
    .then(() => {
        const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' })
        const campa = new User({ name: 'Campa Nilla', email: 'campa@nilla.com', username: 'campanilla', password: '123123123' })
        const peter = new User({ name: 'Peter Pan', email: 'peter@pan.com', username: 'peterpan', password: '123123123' })
        const wendy = new User({ name: 'Wendy Darling', email: 'wendy@darling.com', username: 'wendydarling', password: '123123123' })

        const javier = new User({ name: 'Javier Max', email: 'javier.max@gmail.com', username: 'javieritom', password: '123123123' })

        const postOfPeter = new Post({ author: peter._id, image: 'https://cdn.getyourguide.com/img/tour/6419f8fbed487.jpeg/97.jpg', text: 'Excursion por el Amazonas' })
        const postOfJavier = new Post({ author: javier._id, image: 'https://www.usfigureskating.org/sites/default/files/styles/flexible_hero_image/public/media-library/2025%20world%20team%20poster_1920x1080.jpg?itok=lju5Mfse', text: 'mi sueño' })
        const postOfWendy = new Post({ author: wendy._id, image: 'https://tendistrict.com/wp-content/uploads/2023/02/Diferentes-tipos-de-masajes-corporales-en-Tendistrict.jpg', text: 'En mis dias libres' })
        return Promise.all([
            pepito.save(),
            campa.save(),
            peter.save(),
            wendy.save(),
            javier.save(),
            postOfPeter.save(),
            postOfWendy.save(),
            postOfJavier.save(),
        ])
    })
    .then(items => {
        const [pepito, campa, peter, wendy, postOfPeter, postOfWendy] = items

        console.log(pepito, campa, peter, wendy, postOfPeter, postOfWendy)

        //return User.deleteOne({ _id: campa._id })

        // return Promise.all([
        //     User.deleteOne({ _id: peter._id }),
        //     Post.deleteOne({ _id: postOfPeter._id })
        // ])

        // return User.updateOne({ _id: pepito._id }, { $set: { password: '234234234' } })
    })
    .then(() => console.log('the end'))
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())