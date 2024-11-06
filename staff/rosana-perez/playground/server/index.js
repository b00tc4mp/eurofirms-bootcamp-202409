const express = require('express')
// traemos express

const server = express()

server.get('/', (req, res) => res.send('Server is up'))
//configuración de la ruta por defecto, indica que el server está activo

server.get('/helloworld', (req, res) => res.send('Hello World!'))
/* establecemos una ruta /helloworld para el server, con una
request y una response */

server.get('/time', (req, res) => {
    //{ "year": 2024, "month": 11, "day": 6, "hour": 13, "minute": 52, "second":20}

    const date = new Date

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDay()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const time = {
        /*year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        , o bien simplificado: */
        year,
        month,
        day,
        hour,
        minute,
        second
    }

    const json = JSON.stringify(time)

    res.setHeader('Content-Type', 'application/json')
    res.send(json)
})

server.get('/salutation', (req, res) => {
    // req.query -> {name: 'Peter'}
    const name = req.query.name

    res.send('Hello, ' + name + '!')

})

/*server.get('/authenticate', (req, res) => {
    //req.query -> {username:'peterpan', password: '123123123' }
    const username = req.query.username
    const password = req.query.password

    if (username === 'mickeymouse' && password === '123123123') {
        res.send('OK :)')

        return
    }
    res.send('KO :(')
})
*/


const formBodyParser = express.urlencoded({ extended: true })
// parseador, interpreta los datos de boy y los va a convertir en el objeto de la lin.75
// req
//body -> username=peterpan&password=123123123

server.post('/authenticate', formBodyParser, (req, res) => {
    //mediante el parseador, obtenemos el siguiente objeto
    //req.body -> { username: 'peterpan', password: '123123123' }
    const username = req.body.username
    const password = req.body.password

    if (username === 'mickeymouse' && password === '123123123') {
        res.send('OK :)')

        return
    }
    res.send('KO :(')

})

server.get('/authenticate', (req, res) => {
    //devolvemos formulario para entrada de datos
    res.send(`<!DOCTYPE html>
        <html>
            <head>
                <title>Authenticate</title>
            </head>    
            <body>
                <h1>Authenticate</h1>

                <form method="POST" action="/authenticate">
                    <label for="username">Username</label>
                    <input type= "text" id="username" name="username">
                    
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password">
                    
                    <button type ="submit">Go</button>
                </form>
            </body>
        </html >`)
})

server.listen(8080, () => console.log('server up'))
// arrancar el server



