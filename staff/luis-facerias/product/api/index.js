import express from 'express'

const api = express()


api.get('/', (req, res) => res.send('Hello, World!'))




api.listen(8080, () => console.log('Express API is up => http://127.0.0.1:8080'))

