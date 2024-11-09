import express, { json } from 'express'

const api = express()

api.get('/', (req, res) => res.send('Hello, World!'))


app.listen(8080, () => console.log('API is up'))
