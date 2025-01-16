import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { errors } from 'com'

const { ValidationError, DuplicityError, SystemError, CredentialsError, NotFoundError, OwnershipError } = errors

import registerUser from './logic/registerUser.js'
import authenticateUser from './logic/authenticateUser.js'
import getUserName from './logic/getUserName.js'
import getUser from './logic/getUser.js'
import editUserData from './logic/editUserData.js'
import createItem from './logic/createItem.js'
import getItems from './logic/getItems.js'
import getItemsList from './logic/getItemsList.js'
import getItem from './logic/getItem.js'
import getFavItems from './logic/getFavItems.js'
import deleteItem from './logic/deleteItem.js'
import sellItem from './logic/sellItem.js'
import editItem from './logic/editItem.js'
import toggleFav from './logic/toggleFav.js'
import sendMessage from './logic/sendMessage.js'
import getChats from './logic/getChats.js'
import getChat from './logic/getChat.js'


const { MONGO_URL, JWT_SECRET, PORT } = process.env

mongoose.connect(MONGO_URL)
    .then(() => {
        const api = express()

        api.use(cors())

        api.get('/', (req, res) => res.send('Hello, World!'))

        const jsonBodyParser = express.json()

        const handleError = (res, error) => {
            if (error instanceof ValidationError) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            } else if (error instanceof DuplicityError) {
                res.status(409).json({ error: error.constructor.name, message: error.message })
            } else if (error instanceof CredentialsError) {
                res.status(409).json({ error: error.constructor.name, message: error.message })
            } else if (error instanceof NotFoundError) {
                res.status(404).json({ error: error.constructor.name, message: error.message })
            } else if (error instanceof OwnershipError) {
                res.status(403).json({ error: error.constructor.name, message: error.message })
            } else if (error instanceof SystemError) {
                res.status(500).json({ error: error.constructor.name, message: error.message })
            } else {
                res.status(500).json({ error: error.constructor.name, message: error.message })
            }
        }

        const verifyToken = req => {
            const authorization = req.headers.authorization
            const token = authorization.slice(7)

            const payload = jwt.verify(token, JWT_SECRET)
            const userId = payload.sub

            return userId
        }


        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const name = req.body.name
                const location = req.body.location
                const email = req.body.email
                const username = req.body.username
                const password = req.body.password

                registerUser(name, location, email, username, password)
                    .then(() => res.status(201).send())
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const username = req.body.username
                const password = req.body.password

                authenticateUser(username, password)
                    .then(userId => jwt.sign({ sub: userId }, JWT_SECRET))
                    .then(token => res.json(token))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.get('/users/:targetUserId/name', (req, res) => {
            try {
                const userId = verifyToken(req)
                const targetUserId = req.params.targetUserId

                getUserName(userId, targetUserId)
                    .then(user => res.json(user))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.get('/users/:userId', (req, res) => {
            try {
                const userId = verifyToken(req)

                getUser(userId)
                    .then(user => res.json(user))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.patch('/users/:userId', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const name = req.body.name
                const location = req.body.location
                const email = req.body.email
                const username = req.body.username
                const password = req.body.password

                editUserData(userId, name, location, email, username, password)
                    .then(() => res.status(204).send())
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })


        api.post('/items', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const location = req.body.location
                const image = req.body.image
                const title = req.body.title
                const description = req.body.description
                const sold = req.body.sold

                createItem(userId, location, image, title, description, sold)
                    .then(() => res.status(201).send())
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.get('/items', (req, res) => {
            try {
                const userId = verifyToken(req)

                getItems(userId)
                    .then(items => res.json(items))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.get('/items/list', (req, res) => {
            try {
                getItemsList()
                    .then(items => res.json(items))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.get('/items/:itemId', (req, res) => {
            try {
                const userId = req.headers.authorization && verifyToken(req)
                const itemId = req.params.itemId

                getItem(userId, itemId)
                    .then(item => {
                        if (userId) {
                            item.userId = userId
                        }
                        res.json(item)
                    })
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.patch('/items/:itemId', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const itemId = req.params.itemId

                const title = req.body.title

                editItem(userId, itemId, title)
                    .then(() => res.status(204).send())
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.delete('/items/:itemId', (req, res) => {
            try {
                const userId = verifyToken(req)

                const itemId = req.params.itemId

                deleteItem(userId, itemId)
                    .then(() => res.status(204).send())
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.patch('/sell/:itemId', (req, res) => {
            try {
                const userId = verifyToken(req)

                const itemId = req.params.itemId

                sellItem(userId, itemId)
                    .then(() => res.status(204).send())
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.post('/chats', jsonBodyParser, (req, res) => {

            const userId = verifyToken(req)

            const content = req.body.content
            const chatId = req.body.chatId
            const itemId = req.body.itemId

            sendMessage(userId, content, chatId, itemId)
                .then(() => {
                    return res.status(201).send()
                })
                .catch(error => handleError(res, error))
        })

        api.get('/chats', (req, res) => {
            try {
                const userId = verifyToken(req)

                getChats(userId)
                    .then(chats => res.json(chats))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.get('/chats/:chatId', (req, res) => {
            try {
                const userId = verifyToken(req)
                const chatId = req.params.chatId

                getChat(userId, chatId)
                    .then(chat => res.json(chat))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.post('/users/favs/:itemId/', (req, res) => {

            const userId = verifyToken(req)

            const itemId = req.params.itemId

            toggleFav(userId, itemId)
                .then(() => {
                    return res.status(200).send()
                })
                .catch(error => handleError(res, error))

        })

        api.get('/users/:userId/favs', (req, res) => {
            try {
                const userId = verifyToken(req)

                getFavItems(userId)
                    .then(items => res.json(items))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.listen(PORT, () => console.log(`API is up on ${PORT}`))
    })