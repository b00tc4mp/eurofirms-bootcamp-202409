import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { errors } from 'com'

const { ValidationError, DuplicityError, SystemError, CredentialsError, NotFoundError, OwnerShipError } = errors


import registerUser from './logic/registerUser.js'
import authenticateUser from './logic/authenticateUser.js'
import getUserName from './logic/getUserName.js'
import getUserPlaces from './logic/getUserPlaces.js'
import registerPlace from './logic/registerPlace.js'
import mongoose from 'mongoose'
import getParkings from './logic/getParkings.js'
import deletePlace from './logic/deletePlace.js'

const { MONGO_URL, JWT_SECRET, PORT } = process.env

const handleError = (res, error) => {
    if (error instanceof ValidationError)
        res.status(400).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof CredentialsError)
        res.status(401).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof OwnerShipError)
        res.status(403).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof NotFoundError)
        res.status(404).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof DuplicityError)
        res.status(409).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof SystemError)
        res.status(500).json({ error: error.constructor.name, message: error.message })
    else
        res.status(500).json({ error: SystemError.name, message: error.message })
}

const verifyToken = req => {
    const authorization = req.headers.authorization
    const token = authorization.slice(7)

    const payload = jwt.verify(token, JWT_SECRET)
    const userId = payload.sub

    return userId
}

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
                    .then(name => res.json(name))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.get('/places', (req, res) => {
            try {
                const userId = verifyToken(req)

                getUserPlaces(userId)
                    .then(place => res.json(place))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.post('/places', jsonBodyParser, (req, res) => {
            try {

                // TODO rename logic to createPlace
                // TODO trandcript createPost: use token
                const userId = verifyToken(req)


                const parkingId = req.body.parkingId
                const level = req.body.level
                const space = req.body.space
                const checkin = req.body.checkin
                const checkout = req.body.checkout


                registerPlace(userId, parkingId, level, space, checkin, checkout)
                    .then(() => res.status(201).send())
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.get('/parkings', (req, res) => {
            try {
                getParkings()
                    .then(parkings => res.json(parkings))
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.delete('/places/:placeId', (req, res) => {
            try {
                const userId = verifyToken(req)

                const placeId = req.params.placeId

                deletePlace(userId, placeId)
                    .then(() => res.status(204).send())
                    .catch(error => handleError(res, error))
            } catch (error) {
                handleError(res, error)
            }
        })

        api.listen(PORT, () => console.log(`La API está lista para funcionar en el puerto ${PORT}`))
    })
    .catch(error => console.error(error))
