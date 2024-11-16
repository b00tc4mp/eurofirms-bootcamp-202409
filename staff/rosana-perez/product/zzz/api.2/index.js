import express from 'express'
import registerUser from './logic/registerUser.js'
import authenticateUser from './logic/authenticateUser.js'
import getUserName from './logic/getUserName.js'
import cors from 'cors'
import getPosts from './logic/getPosts.js'


const api = express() // habilitar express

api.use(cors()) // middleware cors - permite a un servidor indicar cualquier dominio, esquema o puerto con un origen distinto del suyo desde el que un navegador debería permitir la carga de recursos

api.get('/', (req, res) => res.send('Hello, World!')) // default route to start api

const jsonBodyParser = express.json()

api.post('/users', jsonBodyParser, (req, res) => { // register user
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

api.post('/users/auth', jsonBodyParser, (req, res) => { //authenticate user
    try {
        const username = req.body.username
        const password = req.body.password

        const userId = authenticateUser(username, password)

        res.json(userId)

    } catch(error) {
        res.status(400).json({error: error.constructor.name, message: error.message })
    }
})

api.get('/users/:targetUserId/name', (req, res) => { //get user name
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

api.get('/posts', (req, res) => {
    try {
        const authorization = req.headers.authorization // Basic <user-id>
        const userId = authorization.slice(6)
        
        const posts = getPosts(userId)

        res.json(posts)
    } catch(error) {
        res.status(400).json({error: error.constructor.name, message: error.message})
    }
})


api.listen(8080, () => console.log('API is up'))



