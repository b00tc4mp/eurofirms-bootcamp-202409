## Pasos que hicimos y conceptos

### Primeros pasos

#### Conceptos Clave

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
    
- **Express**: Framework para construir aplicaciones web y APIs con Node.js.
    
- `package.json`: Archivo que contiene la configuración del proyecto y las dependencias.
    

#### Explicación del Código

1. **Crear una carpeta llamada Server**:
        
    ```bash
    mkdir Server
    cd Server
    ```
    
2. **Inicializar un proyecto de Node.js**:
    
    ```bash
    npm init --yes
    ```
    
    - Esto crea el archivo `package.json` con la configuración básica del proyecto.
        
3. **Instalar Express**:
    
    ```bash
    npm i express
    ```
    
    - Esto instala Express y crea la carpeta `node_modules` que contiene todas las dependencias del proyecto, incluido Express.
        
4. **Importar Express en** `index.js`:
    
    ```js
    const express = require('express');
    const server = express(); // Express devuelve un objeto que es el servidor
    ```
    
#### Aclaraciones

- `package-lock.json`: Archivo que asegura que las dependencias se instalen de manera consistente en diferentes entornos. Es prescindible pero útil para la consistencia.
    

### Configurando rutas

#### Conceptos Clave

- **Rutas**: Definen los endpoints de la API y cómo responder a las solicitudes.
    
- **Métodos HTTP**: GET, POST, PUT, DELETE, etc.
    

#### Explicación del Código

1. **Definir una ruta GET**:
    ```js
    server.get('/helloworld', (req, res) => res.send("Hello world"));
    ```
    
    - Define una ruta que responde con "Hello world" cuando se accede a `/helloworld`.
    
2. **Configurar el puerto del servidor**:
    
    ```js
    server.listen(8080, () => console.log('Hemos levantado el servidor'));
    ```
    
    - El servidor escucha en el puerto 8080 y muestra un mensaje cuando está listo.
    
3. **Iniciar el servidor**:
    
    
    ```bash
    node index.js
    ```
    

### Peticiones y respuestas

#### Conceptos Clave

- **Cabeceras HTTP**: Información adicional enviada con las solicitudes y respuestas HTTP.
    
- **Códigos de estado HTTP**: Indican el resultado de la solicitud (200 OK, 404 Not Found, etc.).
    

#### Aclaraciones

- **Peticiones y respuestas**: Cuando el cliente envía una petición, el servidor responde con una cabecera y un cuerpo de respuesta.
    

### Curl y pruebas del servidor

#### Conceptos Clave

- **Curl**: Herramienta de línea de comandos para realizar solicitudes HTTP.
    
- **Pruebas del servidor**: Verificar que las rutas y respuestas del servidor funcionen correctamente.
    

#### Explicación del Código

1. **Ejemplo de uso de Curl**:
    
    
    ```bash
    curl -X GET https://www.google.com -v
    ```
    
    - Realiza una solicitud GET a Google y muestra los detalles de la petición y respuesta.

2. **Ejemplo de prueba con Curl**:
    
    ```bash
    curl -X POST -H 'Content-Type: application/json' -d '{"name":"Peter Pan","email":"peter@pan.com","username":"peterpan","password":"123123123"}' http://localhost:8080/users -v
    ```
    

### Ejemplos

#### Petición de hora

#### Explicación del Código

1. **Definir una ruta GET para la hora**:
    
    ```js
    server.get('/time', (req, res) => {
        const date = new Date();
        const time = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        const json = JSON.stringify(time);
        res.setHeader('Content-Type', 'application/json');
        res.send(json);
    });
    ```
    
#### Petición con parámetro enviado en la dirección

#### Explicación del Código

1. **Definir una ruta GET con parámetros de consulta**:
    
    ```js
    server.get('/salutation', (req, res) => {
        const name = req.query.name;
        res.send('Hello, ' + name + '!');
    });
    ```
    

#### Petición con parámetros enviados en la dirección

#### Explicación del Código

1. **Definir una ruta GET con múltiples parámetros de consulta**
    
    ```js
    server.get('/authenticate', (req, res) => {
        const username = req.query.username;
        const password = req.query.password;
        if (username === 'mickeymouse' && password === '123123123') {
            res.send('OK :)');
            return;
        }
        res.send('KO :(');
    });
    ```
    

#### Petición con parámetros recibidos por POST

#### Explicación del Código

1. **Definir un parser para el cuerpo de la solicitud**
    
    ```js
    const formBodyParser = express.urlencoded({ extended: true });
    ```
    
2. **Definir una ruta POST con parámetros en el cuerpo**:

    ```js
    server.post('/authenticate', formBodyParser, (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        if (username === 'mickeymouse' && password === '123123123') {
            res.send('OK :)');
            return;
        }
        res.send('KO :(');
    });
    ```
    
3. **Definir una ruta GET para mostrar el formulario**:
    
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
            </html>`);
    });
    ```
    
4. **Ejemplo de prueba con Curl**:
    
    ```bash
    curl -X POST 'http://localhost:8080/authenticate' -d 'username=mickeymouse&password=123123123' -v
    ```
    

### CORS

#### Conceptos Clave

- **CORS (Cross-Origin Resource Sharing)**: Mecanismo de seguridad que permite o restringe las solicitudes HTTP entre diferentes dominios.
    
- **Cabecera** `Access-Control-Allow-Origin`: Especifica qué orígenes pueden acceder a los recursos del servidor.
    

#### Explicación del Código

1. **Instalar el paquete** `cors`:
    
    ```bash
    npm install cors
    ```
    
2. **Configurar CORS en el servidor**:
    
    ```js
    import express from 'express';
    import cors from 'cors';
    
    const app = express();
    
    // Configurar CORS para permitir solicitudes desde cualquier origen
    app.use(cors());
    
    app.get('/data', (req, res) => {
        res.json({ message: 'Datos desde la API' });
    });
    
    app.listen(3000, () => {
        console.log('Servidor escuchando en el puerto 3000');
    });
    ```
    

#### Aclaraciones

- **Seguridad en Producción**: En producción, es mejor especificar los orígenes permitidos para mejorar la seguridad:
    
    ```js
    app.use(cors({ origin: 'http://miapp.com' }));
    ```
    

### Resumen

- **Node.js y Express**: Configuración básica y uso de rutas.
    
- **Peticiones y Respuestas**: Manejo de cabeceras y códigos de estado HTTP.
    
- **Curl**: Herramienta para probar las rutas del servidor.
    
- **CORS**: Configuración para permitir solicitudes entre diferentes dominios.