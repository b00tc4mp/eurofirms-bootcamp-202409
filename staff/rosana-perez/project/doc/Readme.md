# Dona2 App

## Intro

Dona2 es un proyecto de economía colaborativa, para el intercambio de bienes entre particulares de manera gratuíta y altruista, consiguiendo reutilizar bienes en buen estado, un mejor aprovechamiento de los recursos, y beneficios para el medio ambiente.

Cada usuario puede buscar qué tipo de objetos son de su interés, verificar su ubicación, contactar con el donante de bienes para su entrega, en una primera versión a través de la app, y a su vez también publicar artículos que desee donar.

Los artículos susceptibles de donación serán: juguetes, libros, ropa, ropa de cama, utensilios del hogar, electrodomésticos y muebles.

![Dona2](https://i.pinimg.com/originals/db/2d/d4/db2dd47f55bea3a18aa1fa3382bb8c10.gif)

## Functional

En esta aplicación, el usuario es "User", el artículo objeto del intercambio es un "item" y el anuncio publicado es un "Post".

### Use cases

En la versión inicial, el usuario User está autorizado para:

- Ver todos los posts de la app
- Marcar y desmarcar interés en un item
- Comunicar con la app para contactar y recoger
- Si desea publicar un item, podrá:
  - Crear un post
  - Editar el texto asociado al post
  - Eliminar un post publicado

### UI/UX Design

[Prototype](https://www.figma.com/proto/voBNL7aUM3va1nGvh9QZAL/Untitled?node-id=0-1&t=cF8MqvlbdwNpzXz8-1)

## Technical

### Blocks

- APP (UI)
- API (core)
- DB (data)

### Packages

- app (front-end)
- api (back-end)
- com (validation, errors)
- doc (documentation)

### Techs

- HTML / CSS / JS
- React
- Tailwind
- Express
- Node
- Mongo

### Data Model

- User
  - _id (uuid)
  - name (string, required)
  - email (string, required, unique)
  - username (string, required, unique)
  - password (string, required)

- Post
  - _id (uuid)
  - author (User.id)
  - image (string, required)
  - text (string, required)
  - data (date, required)
