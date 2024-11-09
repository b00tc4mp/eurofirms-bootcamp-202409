import express from 'express'

const api = express()


api.get('/', (req, res) => res.send('Hello, World!'))


api.listen(https://127.0.0.1:8080, () => console.log('API is up'))

