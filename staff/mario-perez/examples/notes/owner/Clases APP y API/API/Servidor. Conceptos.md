```insta-toc
---
title:
  name: Contenido
  level: 1
  center: false
exclude: ""
style:
  listType: number
omit: []
levels:
  min: 1
  max: 6
---

# Contenido

1. Introducción
    1. Pasos que hicimos y conceptos
        1. Primeros pasos
        2. Configurando rutas
        3. Peticiones y respuestas
        4. Curl y pruebas del servidor
        5. Ejemplos
            1. Petición de hora
            2. Petición con parámetro enviado en la dirección http://servidor:puerto/pagina?parametro
            3. Petición con parámetros enviados en la dirección http://servidor:puerto/pagina?parametro&parametro
            4. Petición con parámetros recibidos por POST
        6. CORS
        7. Tokens
            1. Extracción
```
# Introducción

Para entender los siguientes conceptos, las prácticas las hicimos en una rama distinta, no en la propia app.

> [!atencion]
> Estos ejemplos se hicieron en la rama feature/playground

## Pasos que hicimos y conceptos
### Primeros pasos

- Crear una carpeta llamada Server (en nuestro proyecto ya podremos llamarla API)
- Para que server sea un paquete de node nos situamos dentro e hicimos
```bash
npm init --yes
```

Esto crea el archivo ``package.json``.

- Instalamos express, que es una paquete que depende de server, como se puede ver en el ``package.json``. Además creará la carpeta ``node_modules`` que esta ignorada por defecto, y que contiene todas las dependencias de node, incluido express.
```bash
npm i express
```


También crea ``package-lock.json``, un archivo para la caché y que es prescindible, se puede borrar.

> [!Express]
> Es un paquete que permite montar un servidor. Requiere un archivo index.js
> Si se hace un `npm list --depth 10` se ve la lista de dependencias 

- Para usar express lo importamos con

```js
const express = require('express')
const server = express() // express devuelve un objeto que es el servidor
```

### Configurando rutas

```js
server.get('/helloworld', (req, res) => res.send("Hello world"))
```
Como primer parámetro, le pasamos una ruta, y como segundo parámetro ponemos una función que tiene como parámetros la petición y la respuesta, y que aquí devuelve un mensaje.

Pondremos GET si estamos leyendo, cogiendo cosas. Pero si estamos enviando cosas privadas, usaremos POST

El servidor utiliza un puerto para comunicarse con el cliente. Para indicar el puerto pondremos

```js
server.listen(8080, () => console.log('Hemos levantado el servidor'))
```

Al conectarse el servidor al puerto 8080, devolverá un mensaje diciendo que el servidor está levantado.
Ahora solo tenemos que correr index.js con NodeJS y si todo va bien, habremos levantado el servidor.

```bash
node index.js
```

En el archivo `package.json` se puede poner un script que diga que se haga `node index.js` cuando ponemos otra palabra, que sustituirá a la instrucción dicha anteriormente.
### Peticiones y respuestas

Cuando el cliente manda una petición internamente está mandando una cabecera a lo cual el servidor le responde con otra cabecera, aunque el usuario vea otra cosa.

Las peticiones y respuestas se ven así

![[Pasted image 20241210230709.png]]

Para ver los diferentes mensajes de estados de respuesta, consultar [[https://developer.mozilla.org/es/docs/Web/HTTP/Status]]

### Curl y pruebas del servidor

Es un comando que permite conectar a un servidor para ver la petición del cliente y respuesta por parte del servidor.

```bash
curl -X GET / POST [-H] [-d]  https://www.google.com -v
```

- Petición (>) nuestra al servidor de Google
- Respuesta (<) del servidor de Google 

Es con este comando con el cual se hacen las pruebas.

Le pasamos con -d los datos a evaluar, con -X el método de cómo los recoge, y, si hace falta, decirle el tipo. en la cabecera con -H.

Estos archivos test no se ejecutarán hasta que no les cambiemos los permisos de ejecución.

```bash
chmod 744 test/register-user.sh
curl -X POST -H 'Content-Type: application/json' -d '{"name":"Peter Pan","email":"peter@pan.com","username":"peterpan","password":"123123123"}' http://localhost:8080/users -v
```

- Creamos una carpeta test con archivos por cada comando. Como necesitamos un comando por cada ruta, habrá tantos archivos como rutas haya.

### Ejemplos

#### Petición de hora

```js
server.get('/time', (req, res) => {

    // {"year":2024,"month":11,"day":3,"hour":12,"minute":42,"second":30}
    const date = new Date

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    // const time = {
    //     year: year,
    //     month: month,
    //     day: day,
    //     hour: hour,
    //     minute: minute,
    //     second: second
    // }

    const time = {
        year,
        month,
        day,
        hour,
        minute,
        second
    }

  

    const json = JSON.stringify(time) // transformarlo a JSON

    res.setHeader('Content-Type', 'application/json') //indica que la respuesta llegará en formato JSON

    res.send(json) // encía la respuesta
})
```

#### Petición con parámetro enviado en la dirección http://servidor:puerto/pagina?parametro

```js
server.get('/salutation', (req, res) => {
    // req.query -> { name: 'Peter' }
    const name = req.query.name
    res.send('Hello, ' + name + '!')
})
```

#### Petición con parámetros enviados en la dirección http://servidor:puerto/pagina?parametro&parametro

```js
 server.get('/authenticate', (req, res) => {

     // req.query -> { username: 'peterpan', password: '123123123' }

     const username = req.query.username
     const password = req.query.password

     if (username === 'mickeymouse' && password === '123123123') {
         res.send('OK :)')

         return
     }

     res.send('KO :(')

 })
```

#### Petición con parámetros recibidos por POST

Ya no hay query, se sustituye por body:

```js
// body -> username=peterpan&password=123123123
const formBodyParser = express.urlencoded({ extended: true }) // conversión
// formBodyParser -> req.body = { username: 'peterpan', password: '123123123' }


server.post('/authenticate', formBodyParser, (req, res) => {
    // req.body -> { username: 'peterpan', password: '123123123' }

    const username = req.body.username
    const password = req.body.password

    if (username === 'mickeymouse' && password === '123123123') {
        res.send('OK :)')
        
    return
    }
    
    res.send('KO :(')
})
```

Para recibir un POST, obviamente, se recibe con un formulario, que sería retornado:

```js
server.get('/authenticate', (req, res) => {
    res.send(`<!DOCTYPE html>
        <html>
            <head>
                <title>Authenticate</title>
            </head>
            <body>
                <h1>Authenticate</h1>
                <form method="POST" action="/authenticate">

                    <label for="username">Username</label>
                    <input type="text" id="username" name="username">

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password">

                    <button type="submit">Go</button>
                </form>
        </html>`)
})
```

En este ejemplo el comando ``curl`` sería 

```bash
curl -X POST 'http://localhost:8080/authenticate' -d 'username=mickeymouse&password=123123123' -v
```

### CORS

CORS es un mecanismo de seguridad implementado en los navegadores web que permite o restringe las solicitudes HTTP realizadas desde un dominio diferente al dominio del recurso solicitado. En otras palabras, CORS controla si una página web puede hacer solicitudes a una API que está alojada en un dominio diferente.

Cuando una aplicación web (cliente) intenta hacer una solicitud a una API que está en un dominio diferente, el navegador verifica las políticas de CORS para determinar si la solicitud está permitida. Si la política de CORS no permite la solicitud, el navegador la bloqueará, y el cliente no podrá acceder a los datos de la API.

### Tokens
![[Orden para construir una App con React y Mongo#Tokens]]

#### Extracción

Esta función desencripta el token para posteriormente extraer el id del usuario

```js
function extractPayloadFromJWT(token) {
    const startIndex = token.indexOf('.')
    const endIndex = token.lastIndexOf('.')

    const payloadB64 = token.slice(startIndex + 1, endIndex)
    const payloadJSON = atob(payloadB64)
    const payload = JSON.parse(payloadJSON)

    return payload
}

export default extractPayloadFromJWT
```

- `startIndex` obtiene el índice del primer punto en el token, y `endIndex` el del último.
- `payloadB64` obtiene la parte del token que corresponde al payload, que está entre el primer y el último punto.
- `atob` es una función que decodifica una cadena de Base64 a una cadena de texto. Aquí, decodifica el payload de Base64 a JSON.
- `JSON.parse` convierte la cadena JSON en un objeto JavaScript.
- La función retorna el objeto `payload`, que contiene los datos del usuario.