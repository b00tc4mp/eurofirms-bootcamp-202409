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
import getItem from './logic/getItem.js'
import getFavItems from './logic/getFavItems.js'
import deleteItem from './logic/deleteItem.js'
import editItem from './logic/editItem.js'
import toggleFav from './logic/toggleFav.js'
import sendMessage from './logic/sendMessage.js'
import getMessagesIn from './logic/getMessagesIn.js'
import getMessagesOut from './logic/getMessagesOut.js'



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

        api.get('/users/:userId/', (req, res) => {
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

                createItem(userId, location, image, title, description)
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

        api.get('/items/:itemId', (req, res) => {
            try {
                const userId = verifyToken(req)
                const itemId = req.params.itemId

                getItem(userId, itemId)
                    .then(item => res.json(item))
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

        api.post('/items/:itemId/messages', jsonBodyParser, (req, res) => {

            const userId = verifyToken(req)

            const itemId = req.params.itemId
            const recipientId = req.body.recipientId
            const content = req.body.content

            sendMessage(userId, itemId, recipientId, content)
                .then(() => {
                    return res.status(201).send()
                })
                .catch(error => handleError(res, error))
        })

        api.get('/messagesIn', (req, res) => {
            try {
                const userId = verifyToken(req)

                getMessagesIn(userId)
                    .then(messages => res.json(messages))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.get('/messagesOut', (req, res) => {
            try {
                const userId = verifyToken(req)

                getMessagesOut(userId)
                    .then(messages => res.json(messages))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(error)
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