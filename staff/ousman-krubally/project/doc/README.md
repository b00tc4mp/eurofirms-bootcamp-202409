# Mattas kitchen App!

## Intro

Esta aplicacion Mattas kitchen esta diseñada para ofrecer una plataforma de pedidos de comida casera halal, conectando a los usuarios con un catalogo personalizado de platillos disponibles.


![come y disfruta](https://media.giphy.com/media/H6u4NDksxmolG/giphy.gif?cid=ecf05e475qxivt4gzsg7ey1xrqyrgfrfkilh64v1ozlwdn35&ep=v1_gifs_search&rid=giphy.gif&ct=g)

## Funciones

### Use cases


- Gestion de pedidos: los usuarios pueden 
    - seleccionar platillos dispobles  
    - Eleguir plato
    - personalizar pedidos 
    - Realizar el pago

- Panel de administracion: los propietarios pueden gestionar menus y precios facil mente

    - añadir plato 
    - añadir precio 
    - descripcion 
    - modificar
    - eliminar 

### UIUX Design

[prototype](https://www.figma.com/design/qdc5IUIuYQX6FRsqGHErNk/Untitled?t=teXDnZ4PyVQK70Cz-1)

## Technical


### Blocks

- App (UI)
- Api (core)
- DB (data)

### Packages

- app (front-end)
- api (back-end)
- com (validation, errors)
- doc (documentation)

### Techas

- HTML / CSS / JS
- React
- Tailwind
- Express
- Node
- Mongo

### Data Model

User
    - _id (uuid)
    - name (string, required)
    - email (string, required)
    - username (srting, required)
    - password (string, required)

- Post
    - _id (uuid)
    - author (User.id)
    - location(string, required)
    - image (string, required)
    - text (string, required)
    - data (data, required)