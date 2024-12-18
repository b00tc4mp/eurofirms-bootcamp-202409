import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { errors } from 'com'

const { ValidationError, DuplicityError, SystemError, CredentialsError, NotFoundError, OwnershipError } = errors

import registerUser from './logic/registerUser.js'
import authenticateUser from './logic/authenticateUser.js'
import getUser from './logic/getUser.js'
import createItem from './logic/createItem.js'
import getItems from './logic/getItems.js'
import deleteItem from './logic/deleteItem.js'
import editItem from './logic/editItem.js'
import sendMessage from './logic/sendMessage.js'
import favouriteMark from './logic/favouriteMark.js'
import getMessages from './logic/getMessages.js'

const { MONGO_URL, JWT_SECRET, PORT } = process.env

mongoose.connect(MONGO_URL)
    .then(() => {
        const api = express()

        api.use(cors())

        api.get('/', (req, res) => res.send('Hello, World!'))

        const jsonBodyParser = express.json()

        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const name = req.body.name
                const location = req.body.location
                const email = req.body.email
                const username = req.body.username
                const password = req.body.password

                registerUser(name, location, email, username, password)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof DuplicityError)
                            res.status(409).json({ error: error.constructor.name, message: error.message })
                        else if (error instanceof SystemError)
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        else
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    res.status(400).json({ error: error.constructor.name, message: error.message })
                else
                    res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const username = req.body.username
                const password = req.body.password

                authenticateUser(username, password)
                    .then(userId => jwt.sign({ sub: userId }, JWT_SECRET))
                    .then(token => res.json(token))
                    .catch(error => {
                        if (error instanceof CredentialsError)
                            res.status(401).json({ error: error.constructor.name, message: error.message })
                        else if (error instanceof SystemError)
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        else
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                    })

            } catch (error) {
                if (error instanceof ValidationError)
                    res.status(400).json({ error: error.constructor.name, message: error.message })
                else
                    res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.get('/users/:targetUserId/', (req, res) => {
            try {
                const authorization = req.headers.authorization
                const token = authorization.slice(7)

                const payload = jwt.verify(token, JWT_SECRET)
                const userId = payload.sub

                const targetUserId = req.params.targetUserId

                getUser(userId, targetUserId)
                    .then(user => res.json(user))
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            res.status(404).json({ error: error.constructor.name, message: error.message })
                        else if (error instanceof SystemError)
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        else
                            res.status(500).json({ error: error.constructor.name, message: message.error })
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    res.status(400).json({ error: error.constructor.name, message: error.message })
                else
                    res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.post('/items', jsonBodyParser, (req, res) => {
            try {
                const authorization = req.headers.authorization
                const token = authorization.slice(7)

                const payload = jwt.verify(token, JWT_SECRET)
                const userId = payload.sub

                const location = req.body.location
                const image = req.body.image
                const title = req.body.title
                const description = req.body.description

                createItem(userId, location, image, title, description)
                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            res.status(404).json({ error: error.constructor.name, message: error.message })
                        else if (error instanceof SystemError)
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        else
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    res.status(400).json({ error: error.constructor.name, message: error.message })
                else
                    res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.get('/items', (req, res) => {
            try {
                const authorization = req.headers.authorization
                const token = authorization.slice(7)

                const payload = jwt.verify(token, JWT_SECRET)
                const userId = payload.sub

                getItems(userId)
                    .then(items => res.json(items))
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            res.status(404).json({ error: error.constructor.name, message: error.message })
                        else if (error instanceof SystemError)
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        else
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    res.status(400).json({ error: error.constructor.name, message: error.message })
                else
                    res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.patch('/items/:itemId', jsonBodyParser, (req, res) => {
            try {
                const authorization = req.headers.authorization
                const token = authorization.slice(7)

                const payload = jwt.verify(token, JWT_SECRET)
                const userId = payload.sub

                const itemId = req.params.itemId

                const title = req.body.title

                editItem(userId, itemId, title)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            res.status(404).json({ error: error.constructor.name, message: error.message })
                        else if (error instanceof OwnershipError)
                            res.status(403).json({ error: error.constructor.name, message: error.message })
                        else if (error instanceof SystemError)
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        else
                            res.status(500).json({ error: error.constructor.name, message: error.message })

                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    res.status(400).json({ error: error.constructor.name, message: error.message })
                else
                    res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.delete('/items/:itemId', (req, res) => {
            try {
                const authorization = req.headers.authorization
                const token = authorization.slice(7)

                const payload = jwt.verify(token, JWT_SECRET)
                const userId = payload.sub

                const itemId = req.params.itemId

                deleteItem(userId, itemId)
                    .then(() => res.status(204).send())
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            res.status(404).json({ error: error.constructor.name, message: error.message })
                        else if (error instanceof OwnershipError)
                            res.status(403).json({ error: error.constructor.name, message: error.message })
                        else if (error instanceof SystemError)
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        else
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    res.status(400).json({ error: error.constructor.name, message: error.message })
                else
                    res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.post('/items/:itemId/messages', jsonBodyParser, (req, res) => {

            const authorization = req.headers.authorization
            const token = authorization.slice(7)

            const payload = jwt.verify(token, JWT_SECRET)
            const userId = payload.sub

            const itemId = req.params.itemId
            const recipientId = req.body.recipientId
            const content = req.body.content

            sendMessage(userId, itemId, recipientId, content)
                .then(() => {
                    return res.status(201).send();
                })
                .catch(error => {
                    if (error instanceof NotFoundError)
                        res.status(404).json({ error: error.constructor.name, message: error.message })
                    else if (error instanceof OwnershipError)
                        res.status(403).json({ error: error.constructor.name, message: error.message })
                    else if (error instanceof SystemError)
                        res.status(500).json({ error: error.constructor.name, message: error.message })
                    else
                        res.status(500).json({ error: error.constructor.name, message: error.message })
                })

        })



        api.get('/messages', (req, res) => {

            const authorization = req.headers.authorization
            const token = authorization.slice(7)

            const payload = jwt.verify(token, JWT_SECRET)
            const userId = payload.sub

            getMessages(userId)
                .then(messages => res.json(messages))
                .catch(error => {
                    if (error instanceof NotFoundError)
                        res.status(404).json({ error: error.constructor.name, message: error.message })
                    else if (error instanceof SystemError)
                        res.status(500).json({ error: error.constructor.name, message: error.message })
                    else
                        res.status(500).json({ error: error.constructor.name, message: error.message })
                })
        })


        api.listen(PORT, () => console.log(`API is up on ${PORT}`))
    })