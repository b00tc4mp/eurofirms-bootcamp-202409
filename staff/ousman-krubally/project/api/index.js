import 'dotenv/config'
import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import { errors } from 'com'

const { ValidationError, DuplicityError, SystemError, CredentialsError,
    NotFoundError, OwnershipError } = errors

import registerUser from './logic/registerUser.js'

const { MONGO_URL, PORT } = process.env

const handleError = (res, error) => {
    if (error instanceof ValidationError)
        res.status(401).json({ errror: error.constructor.name, message: error.message })
    else if (error instanceof CredentialsError)
        res.status(401).json({ error: error.constructor.name, message: error.message })
    else if (error instanceof OwnershipError)
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
 
     const payload = jwt.verify(token, JWD_SECRET)
     const userId = payload.sub
 
     return userId
 }

mongoose.connect(MONGO_URL)
    .then(() => {
        const api = express()

        api.use(cors())

        api.get('/', (req, res) => res.send('Hello, World!'))

        const jsonBodyParser = express.json()

        api.post('/user', jsonBodyParser, (req, res) => {
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

        api.listen(PORT, () => console.log(`API is up on port ${PORT}`))
    })
    .catch(error => console.error(error))