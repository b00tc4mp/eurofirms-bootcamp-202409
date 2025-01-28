# Dona2 App

## Intro

Dona2 es un proyecto de economía colaborativa, para el intercambio de bienes entre particulares de manera gratuíta y altruista, consiguiendo reutilizar bienes en buen estado, un mejor aprovechamiento de los recursos, y beneficios para el medio ambiente.

Cada usuario puede buscar qué tipo de objetos son de su interés, verificar su ubicación, contactar con el donante de bienes para su entrega, en una primera versión a través de la app, y a su vez también publicar artículos que desee donar.

Los artículos susceptibles de donación serán: juguetes, libros, ropa, ropa de cama, utensilios del hogar, electrodomésticos y muebles.

![Dona2](https://i.pinimg.com/originals/db/2d/d4/db2dd47f55bea3a18aa1fa3382bb8c10.gif)

## Functional

En esta aplicación, el usuario es "User", el anuncio con el artículo objeto del intercambio es un "Item", y la vista de mensajes es "Chat".

### Use cases

En la versión inicial, cualquier usuario puede visualizar los items, pero si quiere obtener información o contactar debe registrarse/login.

Una vez registrado, el usuario User está autorizado para:

- Ver todos los items de la app
- Marcar y desmarcar interés en un item como favorito, visualizar todos sus favoritos
- Comunicar con el anunciante para obtener más información y recoger el producto
- Obtener un listado de chats y mensajes enviados y recibidos
- Si desea publicar un item, podrá:
  - Crear un anuncio
  - Editar el título asociado al anuncio
  - Eliminar un anuncio publicado

Una vez eliminado un item, se mantiene en la base de datos temporalmente, se renderizan los chats asociados a cada User en estado  bloqueado,
visualizando únicamente el último mensaje.

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
- com (validation, errors, formatIsoDate)
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
  - id (uuid)
  - name (string, required)
  - location (string, required)
  - email (string, required, unique)
  - username (string, required, unique)
  - password (string, required)
  - favs (Item.id, required)

- Item
  - id (uuid)
  - author (User.id, required)
  - location (string, required)
  - image (string, required)
  - title (string, required)
  - description (string, required)
  - sold (boolean, required)
  - date (date, required)

- Chat
  - id (uuid)
  - users ([User.id], required)
  - item (Item.id, required)
  - messages ([Message])
  - date (date, required)

- Message
  - id (uuid)
  - user (User.id, required)
  - content(string, required)
  - date (date, required)
