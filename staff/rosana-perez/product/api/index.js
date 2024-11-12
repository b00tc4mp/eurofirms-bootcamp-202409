import express from 'express'
import registerUser from './logic/registerUser.js'
import authenticateUser from './logic/authenticateUser.js'
import getUserName from './logic/getUserName.js'


const api = express()

api.get('/', (req, res) => res.send('Hello, World!'))

const jsonBodyParser = express.json()

api.post('/users', jsonBodyParser, (req, res) => {
        console.log(req.body)

        try {
            const name = req.body.name
            const email = req.body.email
            const username = req.body.username
            const password = req.body.password
            
            registerUser(name, email, username, password)

            res.status(201).send()

        } catch(error) {
            res.status(400).json({error: error.constructor.name, message: error.message })
        }

})

api.post('/users/auth', jsonBodyParser, (req, res) => {
    try {
        const username = req.body.username
        const password = req.body.password

        const userId = authenticateUser(username, password)

        res.json(userId)

    } catch(error) {
        res.status(400).json({error: error.constructor.name, message: error.message })
    }
})

api.get('/users/:targetUserId/name', (req, res) => {
    try {
    const authorization = req.headers.authorization // respuesta: Basic <userId>
    const userId = authorization.slice(6) // corta la const authorization, que es Basic <userId>, a partir del 6º dígito 
    
    const targetUserId = req.params.targetUserId //extraer targetUserId desde la req

    const name = getUserName(userId, targetUserId)

    res.json(name)

    } catch (error) {
        res.status(400).json({error: error.constructor.name, message: error.message})
    }

})







api.listen(8080, () => console.log('API is up'))



