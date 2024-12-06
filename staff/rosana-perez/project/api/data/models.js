import { Schema, model, Types } from 'mongoose'

const { ObjectId } = Types

const user = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1
    },
    city: {
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
    }
})

const post = new Schema({
    author: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    image: {
        type: String,
        required: true,
        maxLength: 1000
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const User = model('User', user)
const Post = model('Post', post)

export {
    User,
    Post
}