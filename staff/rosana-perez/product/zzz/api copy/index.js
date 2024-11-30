import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'

import registerUser from './logic/registerUser.js'
import authenticateUser from './logic/authenticateUser.js'
import getUserName from './logic/getUserName.js'
import getPosts from './logic/getPosts.js'
import createPost from './logic/createPost.js'
import deletePost from './logic/deletePost.js'

const JWT_SECRET = 'mi gran secreto secretísimo'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        const api = express() // habilitar express

        api.use(cors()) // middleware cors - permite a un servidor indicar cualquier dominio, esquema o puerto con un origen distinto del suyo desde el que un navegador debería permitir la carga de recursos

        api.get('/', (req, res) => res.send('Hello, World!')) // default route to start api

        const jsonBodyParser = express.json()

        // register user
        api.post('/users', jsonBodyParser, (req, res) => {

            try {
                const name = req.body.name
                const email = req.body.email
                const username = req.body.username
                const password = req.body.password

                registerUser(name, email, username, password)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))

            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }

        })
        //authenticate user
        api.post('/users/auth', jsonBodyParser, (req, res) => {

            try {
                const username = req.body.username
                const password = req.body.password

                authenticateUser(username, password)
                    .then(userId => jwt.sign({ sub: userId }, JWT_SECRET))
                    .then(token => res.json(token))
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })
        //get user name
        api.get('/users/:targetUserId/name', (req, res) => {

            try {
                const authorization = req.headers.authorization
                const token = authorization.slice(7)

                const payload = jwt.verify(token, JWT_SECRET)
                const userId = payload.sub

                const targetUserId = req.params.targetUserId

                getUserName(userId, targetUserId)
                    .then(name => res.json(name))
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }

        })

        api.get('/posts', (req, res) => {
            try {
                const authorization = req.headers.authorization
                const token = authorization.slice(7)

                const payload = jwt.verify(token, JWT_SECRET)
                const userId = payload.sub

                getPosts(userId)
                    .then(posts => res.json(posts))
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const authorization = req.headers.authorization
                const token = authorization.slice(7)

                const payload = jwt.verify(token, JWT_SECRET)
                const userId = payload.sub

                const image = req.body.image
                const text = req.body.text

                createPost(userId, image, text)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.delete('/posts/:postId', (req, res) => {
            try {
                const authorization = req.headers.authorization
                const token = authorization.slice(7)

                const payload = jwt.verify(token, JWT_SECRET)
                const userId = payload.sub

                const postId = req.params.postId

                deletePost(userId, postId)
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.listen(8080, () => console.log('API is up'))

    })
    .catch(error => console.error(error))




