const express = require('express')

const server = express()

server.get('/', (req, res) => res.send('Server is ready'))

server.get('/helloworld', (req, res) => res.send('Hello, World'))

server.listen(8082 , () => console.log('server up'))