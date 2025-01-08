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

1. Construir la APP
    1. Index.html
        1. Decirle a React que pinte en el div que hemos creado
    2. App.jsx
    3. Estructurar carpetas
2. Construir la API
    1. registerUser.js y registerUser.test.js
    2. Demás lógicas
    3. Test en Javascript con fetch: register-user.js
        1. Promesas
    4. authenticate-user.js
    5. Instalar CORS
    6. Tokens
```

## Construir la APP
### Index.html

- Poner el ``div`` con el ``id "root"`` dentro del ``body``
- Poner las librerías en links de CDN de React:

```html
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script> <!-- núcleo de React -->
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> <!-- permite conectarse al DOM -->
```

#### Decirle a React que pinte en el div que hemos creado

En el archivo ``main.js``

```js
//VirtualDOM
var title = React.createElement('h1', {style: {color: 'red'} }, 'hola mundo')

var rootElement = document.querySelector('#root')

//Le decimos a React dónde queremos que pinte y creamos la raíz
//El objeto root es donde React va a pintar
var root = ReactDOM.createRoot(rootElement) 

//RealDOM, preparado para que el navegador lo interprete
root.render(title)
//Ahora, title es un DOM real
```

### App.jsx
 
 Ir a [[Introducción. Primeras vistas]]


### Estructurar carpetas

- Todas las vistas en la carpeta ``views``
- Toda la lógica en la carpeta ``logic``
- El generador de id en una carpeta llamada ``util``

## Construir la API

![[Servidor. Conceptos#Pasos que hicimos y conceptos#Primeros pasos]]

>[!importante]
>En el package. json poner que se trabaja con ``type: module`` y en el index importar express con ``import express from 'express'``

### registerUser.js y registerUser.test.js

- Construimos la carpeta ``logic`` para el uso lógico, y la carpeta data con el archivo ``json``. Como hemos visto, para trabajar los JSON tenemos que leerlos como objetos. En la API es un poco diferente a la APP, se necesita un paquete que viene con ``node`` llamado ``fs`` (fileSystem) . Para leer nuestro archivo ``users.json`` hacemos:
```js
import js from 'fs'
let usersJSON = fs.readFileSync('data/users.json', 'utf8') // leemos el archivo y lo metemos en la variable usersJSON
const users = JSON.parse(usersJSON) //lo convertimos a objeto
```

Y para escribir lo hacemos con

```js
usersJSON = JSON.stringify(users)
fs.writeFileSync('archivo', usersJSON)
```

Para usar cualquier archivo primero hay que exportarlo, al final del archivo pondremos
```js
export default archivo
```

Y para importarlo pondremos

```js
import variable from 'archivo'
```
Hacemos nuestra primera lógica llamada ``registerUser``, que, para importarla dentro de la API tenemos que hacerlo en el ``index.js`` así:

```js
import registerUser from './logic/registerUser.js'
```

Además en el trozo de código pondremos un ``try-cach``

```js
api.post('/users', jsonBodyParser, (req, res) => {

    try{
        const name = req.body.name
        const email = req.body.email
        const username = req.body.username
        const password = req.body.password

        registerUser(name, email, username, password)

        res.status(201).send()
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message }) //el nombre del constructor siempre es el tipo de error
    }
})
```

### Demás lógicas

Así lo haremos con las demás lógicas. Para las lógicas en las que tengamos que recoger, por ejemplo, el usuario que hizo la petición, existe una cabecera. Por eso usaremos ``Basic`` en el ``curl``. 





También en el ``index.js`` usaremos algo nuevo:

```js
api.get('/users/:targetUserId/name', (req, res) => {
    try {
	   // obtiene el encabezado de autorización de la solicitud. contiene `Basic <user-id>`.
        const authorization = req.headers.authorization
        const userId = authorization.slice(6) // cogemos el userid del string que devuelve
  
        const targetUserId = req.params.targetUserId
  
        const name = getUserName(userId, targetUserId)

        res.json(name)
    } catch (error) {
        res.status(400).json({ error: error.constructor.name, message: error.message })
    }
})
```

`userId` se usa para autenticar y autorizar al usuario que hace la solicitud, mientras que `targetUserId` se usa para identificar al usuario cuya información se está solicitando.

Nótese que `targetUserId` es un parámetro de la ruta, porque puede variar dependiendo cuál sea el objetivo.

### Test en Javascript con fetch: register-user.js

La herramienta ``fetch()`` (pedir datos) es otra forma de testear en JavaScript. Le pasamos como parámetros la URL donde probaremos (tambien lo hacíamos en el ``curl``), y un objeto que incluye

- el método
- la cabecera, otro objeto con sus propiedades y valores, como el método (si es get o post), y el tipo de dato (JSON por ejemplo)
- El body, que es el objeto con los datos (username, password, etc)

Esto sustituye al comando ``curl`` pero en JavaScript.

```js
fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"name":"Peter Pan","email":"peter@pan.com","username":"peterpan","password":"123123123"}'
})
```

#### Promesas

``fetch`` usa promesas. Una promesa es como un try catch pero funciona de manera asíncrona, es decir, se ejecuta la petición y mientras espera a ser atendida, el programa sigue ejecutándose. 

Es un objeto que representa la eventual finalización (o falla) de una operación asíncrona y su valor resultante. Las promesas permiten manejar operaciones asíncronas de una manera más limpia y manejable que los callbacks anidados.

De este modo, el ``fetch`` quedaría así:

```js
fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"name":"Peter Pan","email":"peter@pan.com","username":"peterpan","password":"123123123"}'
})
    .then(response => {
    // Este bloque se ejecuta cuando la promesa se resuelve exitosamente =>
    console.log(response.status)) //Imprime el estado de la respuesta
    })
    . catch (error => {
    // Este bloque se ejecuta cuando la promesa se rechaza
    console.error(error)) //Imprime el error
```

Mientras que el ``curl`` se prueba en terminal, el ``fetch`` se ejecuta en la consola.

### authenticate-user.js

El código es el mismo exceptuando la URL, los datos que le pasamos en el ``body`` y  que devuelve el ``userId``. Esto lo conseguimos con ``response.json()``.

```js
fetch('http://localhost:8080/users/auth', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"username":"peterpan","password":"123123123"}'
})
    .then(response => {
        console.log(response.status); // Imprime el estado de la respuesta
        return response.json(); // Convierte la respuesta a JSON
    })
    .then(body => console.log(body)) // Imprime el cuerpo de la respuesta JSON
    .catch(error => console.error(error)); // Maneja cualquier error que ocurra
```

### Instalar CORS

> [!Cors]
> CORS es un mecanismo de seguridad implementado en los navegadores web que permite o restringe las solicitudes HTTP realizadas desde un dominio diferente al dominio del recurso solicitado. En otras palabras, CORS controla si una página web puede hacer solicitudes a una API que está alojada en un dominio diferente.
> 
   Cuando una aplicación web (cliente) intenta hacer una solicitud a una API que está en un dominio diferente, el navegador verifica las políticas de CORS para determinar si la solicitud está permitida. Si la política de CORS no permite la solicitud, el navegador la bloqueará, y el cliente no podrá acceder a los datos de la API

```bash
npm install cors
```
 Para que la APP y la API se conecten hay que aplicar CORS a todas las rutas. Es tan sencillo como poner en el archivo ``index.js`` de la API

```js
import cors from 'cors'
api.use(cors())
```

### Tokens

Para protegernos, el sistema pone a cada usuario registrado una ID única, pero a veces esto no es suficiente. Para reforzar la seguridad, hacemos que ese ID se "pierda" entre más números y letras con los tokens. Los tokens se componen de varias partes:

- **Header (Cabecera)**: La primera parte del token, que contiene información sobre el tipo de token y el algoritmo de cifrado utilizado.
```bash
{
  "alg": "HS256",
  "typ": "JWT"
}
```

-  **Payload (Cuerpo)**: La segunda parte del token, que contiene los datos del usuario y otras informaciones relevantes.

```bash
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```
 
- **Signature (Firma)**: La tercera parte del token, que es una "firma digital" única generada por nosotros. Esta firma asegura que el token no ha sido alterado.
```sh
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  
) secret base64 encoded
```
Cada parte se codifica en base 64 y se separa por un punto, y el resultado es un token generado que sustituirá al ID.

Ver https://jwt.io/ para saber cómo se estructura el token.

![[Servidor. Conceptos#Extracción]]
