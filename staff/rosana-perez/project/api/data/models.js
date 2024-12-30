import { Schema, model, Types } from 'mongoose'

const { ObjectId } = Types

const user = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1
    },
    location: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true,
        minLength: 6,
        unique: true
    },
    username: {
        type: String,
        required: true,
        minLength: 4,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    favs: [
        {
            type: ObjectId,
            ref: "Item",
            required: true
        }
    ]
})

const item = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    location: {
        type: String,
        required: true,
        minLength: 3
    },
    image: {
        type: String,
        required: true,
        maxLength: 1000
    },
    title: {
        type: String,
        required: true,
        minLength: 3
    },
    description: {
        type: String,
        required: true,
        minLength: 3
    },

}, { timestamps: true })


const message = new Schema({
    item: {
        type: ObjectId,
        ref: 'Item',
        required: true
    },
    sender: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    recipient: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    }

}, { timestamps: true })

const chat = new Schema({
    message: {
        type: ObjectId,
        ref: 'Message',
        required: true
    },
    from: { //sender
        type: ObjectId,
        ref: 'User',
        required: true
    },
    to: { //recipient
        type: ObjectId,
        ref: 'User',
        required: true
    },
    subject: { //asunto: item
        type: ObjectId,
        ref: 'Item',
        required: true
    }

})

const User = model('User', user)
const Item = model('Item', item)
const Message = model('Message', message)
const Chat = model('Chat', chat)


export {
    User,
    Item,
    Message,
    Chat
}