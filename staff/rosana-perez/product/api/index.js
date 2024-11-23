import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'

import registerUser from './logic/registerUser.js'
import authenticateUser from './logic/authenticateUser.js'
import getUserName from './logic/getUserName.js'
import getPosts from './logic/getPosts.js'
import createPost from './logic/createPost.js'
import deletePost from './logic/deletePost.js'

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        const api = express() // habilitar express

        api.use(cors()) // middleware cors - permite a un servidor indicar cualquier dominio, esquema o puerto con un origen distinto del suyo desde el que un navegador debería permitir la carga de recursos

        api.get('/', (req, res) => res.send('Hello, World!')) // default route to start api

        const jsonBodyParser = express.json()

        api.post('/users', jsonBodyParser, (req, res) => {
            // register user
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

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            //authenticate user
            try {
                const username = req.body.username
                const password = req.body.password

                authenticateUser(username, password)
                    .then(userId = res.json(userId))
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.get('/users/:targetUserId/name', (req, res) => {
            //get user name
            try {
                const authorization = req.headers.authorization
                // respuesta: Basic <userId>
                const userId = authorization.slice(6)
                // corta la const authorization, que es Basic <userId>, a partir del 6º dígito 

                const targetUserId = req.params.targetUserId
                //extraer targetUserId desde la req

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
                // Basic <user-id>
                const userId = authorization.slice(6)

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
                // Basic <user-id>
                const userId = authorization.slice(6)

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
                // Basic <user-id>
                const userId = authorization.slice(6)

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




