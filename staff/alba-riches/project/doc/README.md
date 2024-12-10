PixelVerse for all

Intro

PixelVerse es un foro dedicado a creativos visuales donde fotógrafos, diseñadores y artistas comparten sus trabajos y aprenden juntos. Descubre inspiración en galerías temáticas, participa en concursos trimestrales, y recibe retroalimentación constructiva para perfeccionar tu técnica. Un espacio donde cada pixel cuenta y cada mirada transforma el arte en conexión.

Cada usuario puede subir cualquier fotografia de cualquier temetica, pudiendo comentar otras fotos o darle a me gusta.

Tambien se realizaran concursos trimestrales y la fotografia mas comentada y con mas likes ,tendra acceso a un curso gratuito en academias como  EFTI Centro Internacional de Fotografía y Cine (Madrid) o  Grisart Escola Internacional de Fotografia (Barcelona) para continuar su formacion en este sector

![PixelVerse for all](https://media1.tenor.com/m/n6VxrOwpF64AAAAd/picture-taking-pictures.gif)

Functional

Los usuarios son los denominados 'User' y las fotografias son los 'Objects'

### Use Cases 

En nuestro caso el usuario esta autorizado a :

Ver publicaciones
Crear publicación
Eliminar publicación
Editar texto de la publicación
Dar like a una publicación
Quitar like de una publicación
Añadir comentario a una publicación
Eliminar comentario de una publicación

### UIUX Design 
//poner el link de figma
Prototype

Technical
 
 ### Blocks
 
App (UI)
API (core)
DB (data)

### Packages
app (front-end)
api (back-end)
com (validation, errors)
doc (documentation)

### Techs
HTML/CSS/JS
React
Tailwind
Express
Node
Mongo

### Data Model

# User
id (uuid)
name (string, required)
email (string, required)
username (string, required)
password (string, required)

# Post
id (uuid)
author (User.id)
image (string, required)
text (string, required)
data (date, required)

