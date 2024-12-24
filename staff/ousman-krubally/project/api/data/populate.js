import mongoose from 'mongoose'
import { User, Product, Order, Item } from './models'

mongoose.connect('mongodb://127.0.0.1:27017/mattas-Chiken')
    .then(() => User.deleteMany())           // usuario que se registra
    .then(() => Product.deleteMany())        // platos añadir eliminar
    .then(() => Order.deleteMany())          // pedido cantidad carrito boxes
    .then(() => Item.deleteMany())           // cantidades pedido boxes contador

    const admin = new User({ name: 'Mattas-Chiken', email: 'matas@chiken', username: 'mattas', password: '123123123'})
    const user1 = new User({ name: 'user one', email: 'user@one.com', username: 'userone', password: '123123123'})
    const user3 = new User({ name: 'user tree', email: 'user@tree.com', username: 'usertree', password: '123123123'})
