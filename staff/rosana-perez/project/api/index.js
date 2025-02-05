import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { errors } from 'com'

const { ValidationError, DuplicityError, SystemError, CredentialsError, NotFoundError, OwnershipError } = errors

import logic from './logic/index.js'

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
        //register user
        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const name = req.body.name
                const location = req.body.location
                const email = req.body.email
                const username = req.body.username
                const password = req.body.password

                logic.registerUser(name, location, email, username, password)
                    .then(() => res.status(201).send())
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })
        //login
        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const username = req.body.username
                const password = req.body.password

                logic.authenticateUser(username, password)
                    .then(userId => jwt.sign({ sub: userId }, JWT_SECRET))
                    .then(token => res.json(token))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })
        //get user name
        api.get('/users/:targetUserId/name', (req, res) => {
            try {
                const userId = verifyToken(req)
                const targetUserId = req.params.targetUserId

                logic.getUserName(userId, targetUserId)
                    .then(userName => res.json(userName))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })
        //get user
        api.get('/users/:userId', (req, res) => {
            try {
                const userId = verifyToken(req)

                logic.getUser(userId)
                    .then(user => res.json(user))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })
        //edit user data
        api.patch('/users/:userId', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const name = req.body.name
                const location = req.body.location
                const email = req.body.email
                const username = req.body.username
                const password = req.body.password

                logic.editUserData(userId, name, location, email, username, password)
                    .then(() => res.status(204).send())
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })
        //get user favs
        api.get('/users/:userId/favs', (req, res) => {
            try {
                const userId = verifyToken(req)

                logic.getFavItems(userId)
                    .then(favItems => res.json(favItems))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })
        //toggle an item of user favs registration
        api.post('/users/favs/:itemId/', (req, res) => {

            const userId = verifyToken(req)

            const itemId = req.params.itemId

            logic.toggleFavItem(userId, itemId)
                .then(() => {
                    return res.status(200).send()
                })
                .catch(error => handleError(res, error))

        })
        //create item
        api.post('/items', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const location = req.body.location
                const image = req.body.image
                const title = req.body.title
                const description = req.body.description
                const type = req.body.type
                const sold = req.body.sold

                logic.createItem(userId, location, image, title, description, type, sold)
                    .then(() => res.status(201).send())
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })
        //get items
        api.get('/items', (req, res) => {
            try {
                const userId = verifyToken(req)

                logic.getItems(userId)
                    .then(items => res.json(items))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })
        //get items as guest user
        api.get('/items/guest', (req, res) => {
            try {
                logic.getItemsAsGuest()
                    .then(items => res.json(items))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })
        //get items created by user logged in
        api.get('/items/owner', (req, res) => {
            try {
                const userId = verifyToken(req)

                logic.getItemsFromUser(userId)
                    .then(items => res.json(items))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })
        //get item by itemId
        api.get('/items/:itemId', (req, res) => {
            try {
                const userId = req.headers.authorization && verifyToken(req)
                const itemId = req.params.itemId

                logic.getItem(userId, itemId)
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
        //edit an item title
        api.patch('/items/:itemId', jsonBodyParser, (req, res) => {
            try {
                const userId = verifyToken(req)

                const itemId = req.params.itemId

                const title = req.body.title

                logic.editItem(userId, itemId, title)
                    .then(() => res.status(204).send())
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })
        //delete an item
        api.delete('/items/:itemId', (req, res) => {
            try {
                const userId = verifyToken(req)

                const itemId = req.params.itemId

                logic.deleteItem(userId, itemId)
                    .then(() => res.status(204).send())
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })
        //toggle an item as sold[false/true]
        api.patch('/sold/:itemId', (req, res) => {
            try {
                const userId = verifyToken(req)

                const itemId = req.params.itemId

                logic.toggleSoldItem(userId, itemId)
                    .then(() => res.status(204).send())
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })
        //send a message into a user chat to author of item
        api.post('/chats', jsonBodyParser, (req, res) => {

            const userId = verifyToken(req)

            const content = req.body.content
            const chatId = req.body.chatId
            const itemId = req.body.itemId

            logic.sendMessage(userId, content, chatId, itemId)
                .then(() => {
                    return res.status(201).send()
                })
                .catch(error => handleError(res, error))
        })
        //get chats at user logged in
        api.get('/chats', (req, res) => {
            try {
                const userId = verifyToken(req)

                logic.getChats(userId)
                    .then(chats => res.json(chats))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })
        //get a chat by chatId
        api.get('/chats/:chatId', (req, res) => {
            try {
                const userId = verifyToken(req)
                const chatId = req.params.chatId

                logic.getChat(userId, chatId)
                    .then(chat => res.json(chat))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.listen(PORT, () => console.log(`API is up on ${PORT}`))
    })