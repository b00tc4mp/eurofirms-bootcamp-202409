import express from 'express'
import registerUser from './logic/registerUser.js'

const api = express()

api.get('/', (req, res) => res.send('Hello, World!'))


const jsonBodyParser = express.json()

api.post('/users', jsonBodyParser, (req, res) =>{
    try {
        const name = req.body.name
        const email = req.body.email
        const username = req.body.username
        const password = req.body.password

        registerUser(name, email, username, password)

        res.status(201).send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message})
    }
})

api.listen(8080, () => console.log('Express API is up => http://127.0.0.1:8080'))