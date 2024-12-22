import mongoose from 'mongoose'
import express from 'expres'
import cors from 'cors'

import registerUser from './logic/registerUser.js'
import authenticateUser from './logic/authenticateUser.js'
import getUserName from './logic/getUserName.js'
import getPosts from './logic/getPosts.js'
import createPost from './logic/createPost.js'
import deletePost from './logic/deletePost.js'

mongoose.connet('mongodb://127.0.0.1:27017/test')
    .then(() => {
        const api = express()

        api.use(cors())

        api.get('/', (req, res) => res.send('Hello, wold!'))

        const jsonBodyParser = express.json()

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
    

        api.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const username = req.body.username
                const password = req.body.password

                authenticateUser(username, password)
                    .then(userId => res.json(userId))
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        

        api.get('/users/:targetUserId/name', (req, res) => {
            try {
                const authorization = req.headers.authorization
                const userId = authorization.slice(6)

                const targetUserId = req.params.targetUserId

                getUserName(userId, targetUserId)
                    .then(name => res.json(name))
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
    })
       
        

        apì.get('/posts', (req, res) => {
            try {
                const autorization = req.headers.authorization
                const userId = autorization.slice(6)

                getPosts(userId)
                    .then(posts => res.json(posts))
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
                 } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })

            }

        api.post('/posts', jsonBodyParser, (req, res) => {
            try {
                const authorizaction = req.headers.authorization
                const userId = authorizaction.slice(6)

                const image = req.body.image
                const tex = req.body.tex

                createPost(userId, image, tex)
                    .then(() => res.status(201).send())
                    .catch(error => res.status(400).json({ error: error.constructor.name, message: error.message }))
            } catch (error) {
                res.status(400).json({ error: error.constructor.name, message: error.message })
            }
        })

        api.delete('/posts/:postId', (req, res) => {
            try {
                const authorization = req.headers.authorization
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