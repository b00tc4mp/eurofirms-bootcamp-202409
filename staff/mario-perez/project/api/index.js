import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { errors } from 'com'

const { ValidationError, DuplicityError, SystemError, CredentialsError, NotFoundError, OwnershipError } = errors


import registerUser from './logic/registerUser.js'
import authenticateUser from './logic/authenticateUser.js'
import getUserName from './logic/getUserName.js'
import getUserPlaces from './logic/getUserPlaces.js'
import mongoose from 'mongoose'

const { MONGO_URL, JWT_SECRET, PORT } = process.env

mongoose.connect(MONGO_URL)
    .then(() => {
        const api = express()

        api.use(cors())

        api.get('/', (req, res) => res.send('Hola'))

        const jsonBodyParser = express.json()

        api.post('/users', jsonBodyParser, (req, res) => {
            try {
                const name = req.body.name
                const email = req.body.email
                const username = req.body.username
                const password = req.body.password

                registerUser(name, email, username, password)

                    .then(() => res.status(201).send())
                    .catch(error => {
                        if (error instanceof DuplicityError)
                            res.status(409).json({ error: error.constructor.name, message: error.message })
                        else if (error instanceof SystemError)
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        else
                            res.status(500).json({ error: SystemError.name, message: error.message })
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    res.status(400).json({ error: error.constructor.name, message: error.message })
                else
                    res.status(500).json({ error: SystemError.name, message: error.message })
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
                            res.status(500).json({ error: SystemError.name, message: error.message })
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    res.status(400).json({ error: error.constructor.name, message: error.message })
                else
                    res.status(500).json({ error: SystemError.name, message: error.message })
            }
        })

        api.get('/users/:targetUserId/name', (req, res) => {
            try {
                const authorization = req.headers.authorization // Basic <user-id>
                const token = authorization.slice(7)

                const payload = jwt.verify(token, JWT_SECRET)
                const userId = payload.sub

                const targetUserId = req.params.targetUserId



                getUserName(userId, targetUserId)
                    .then(name => res.json(name))
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            res.status(404).json({ error: error.constructor.name, message: error.message })
                        else if (error instanceof SystemError)
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        else
                            res.status(500).json({ error: SystemError.name, message: error.message })
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    res.status(400).json({ error: error.constructor.name, message: error.message })
                else
                    res.status(500).json({ error: SystemError.name, message: error.message })
            }
        })

        api.get('/places', (req, res) => {
            try {
                const authorization = req.headers.authorization
                const token = authorization.slice(7)

                const payload = jwt.verify(token, JWT_SECRET)
                const userId = payload.sub

                getUserPlaces(userId)
                    .then(place => res.json(place))
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            res.status(404).json({ error: error.constructor.name, message: error.message })
                        else if (error instanceof SystemError)
                            res.status(500).json({ error: error.constructor.name, message: error.message })
                        else
                            res.status(500).json({ error: SystemError.name, message: error.message })
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    res.status(400).json({ error: error.constructor.name, message: error.message })
                else
                    res.status(500).json({ error: SystemError.name, message: error.message })
            }
        })

        api.listen(PORT, () => console.log(`La API está lista para funcionar en el puerto ${PORT}`))
    })
    .catch(error => console.error(error))
