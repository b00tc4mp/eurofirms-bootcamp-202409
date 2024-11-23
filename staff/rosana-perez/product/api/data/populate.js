import mongoose from 'mongoose'
import { User, Post } from './models.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => User.deleteMany())
    .then(() => Post.deleteMany())
    //.then(() => {
    //    const user = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' })

    //    return user.save() 
    //})
    //.then(user => console.log(user))
    //.then(() => User.create({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' }))
    //.then(() => User.create({ name:'Campa Nilla', email: 'campa@nilla.com', username: 'campanilla', password: '123123123' }))
    //.then(() => User.create({ name: 'Peter Pan', email: 'peter@pan.com', username: 'peterpan', password: '123123123' }))
    //.then(() => User.create({ name: 'Wendy Darling', email: 'wendy@darling.com', username: 'wendydarling', password: '123123123' }))

    .then(() => {
        const pepito = new User({ name: 'Pepito Grillo', email: 'pepito@grillo.com', username: 'pepitogrillo', password: '123123123' })
        const campa = new User({ name: 'Campa Nilla', email: 'campa@nilla.com', username: 'campanilla', password: '123123123' })
        const peter = new User({ name: 'Peter Pan', email: 'peter@pan.com', username: 'peterpan', password: '123123123' })
        const wendy = new User({ name: 'Wendy Darling', email: 'wendy@darling.com', username: 'wendydarling', password: '123123123' })

        const postOfPeter = new Post({ author: peter._id, image: 'https://static.wikia.nocookie.net/p__/images/b/b4/Peter_pan_signature_by_disneyfreak19_dh15ob1.png/revision/latest?cb=20240311211636&path-prefix=protagonist', text: 'hello world!' })

        return Promise.all([pepito.save(), campa.save(), peter.save(), wendy.save(), postOfPeter.save()])
    })
    .then(items => {
        const [pepito, campa, peter, wendy, postOfPeter] = items
        //console.log(pepito, campa, peter, wendy)
    })
    .catch(error => console.error(error))
    .finally(() => mongoose.disconnect())

//pruebas: en terminal, cd data -> node populate.js

