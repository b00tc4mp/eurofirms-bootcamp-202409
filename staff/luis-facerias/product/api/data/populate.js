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

        const postOfPepito = new Post({ author: pepito._id, image: 'https://i.pinimg.com/564x/39/bd/25/39bd25f51b870930a6e37dcc3ec62115.jpg', text: 'hello pepito!' })
        const postOfCampa= new Post({ author: campa._id, image: 'https://i.pinimg.com/474x/9e/d9/7b/9ed97ba8c3e40f84c4bd601887047c11.jpg', text: 'hello campa!' })
        const postOfPeter = new Post({ author: peter._id, image: 'https://static.wikia.nocookie.net/disney-fan-fiction/images/8/85/1085519-peter_pan_782_super.jpg', text: 'hello peter!' })
        const postOfWendy = new Post({ author: wendy._id, image: 'https://i.pinimg.com/474x/c1/67/15/c167155158a00b0bc163df01b179cd6b.jpg', text: 'hello wendy!' })
        

        return Promise.all([
            pepito.save(),
            campa.save(),
            peter.save(),
            wendy.save(),
            postOfPepito.save(),
            postOfCampa.save(),
            postOfPeter.save(),
            postOfWendy.save()
        ])
    })
    .then(items => {
        const [pepito, campa, peter, wendy, postOfPepito, postOfCampa, postOfPeter, postOfWendy] = items

        console.log(pepito, campa, peter, wendy, postOfPepito, postOfCampa, postOfPeter, postOfWendy)

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