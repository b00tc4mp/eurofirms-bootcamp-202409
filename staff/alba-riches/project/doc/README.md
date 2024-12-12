FixLoop

Intro

FixLoop es la app que te ayuda a reparar, intercambiar y reciclar piezas de tecnología. Conectamos a usuarios que necesitan repuestos con quienes tienen piezas disponibles. Ahorra dinero, alarga la vida de tus dispositivos y contribuye al reciclaje tecnológico. Encuentra lo que necesitas, intercambia piezas fácilmente y sé parte de una comunidad que apuesta por un futuro más sostenible y responsable.

Cada usuario puede subir cualquier fotografia de piezas que tenga o este buscando, pudiendo comentar otras fotos de las mismas o darle a me gusta.


 ![FixLoop](https://i.pinimg.com/originals/89/50/5d/89505d16d932d8cca00011c78a54a69d.gif)

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

