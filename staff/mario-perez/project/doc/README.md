# ParkSpot

## Intro

<!--ParkSpot es una aplicación web que ayuda a los usuarios a registrar y recordar la ubicación exacta de su plaza de parking.

Permite a los usuarios registrar la ubicación de su coche en un parking, incluyendo detalles como el número de plaza, nivel y cualquier otra información relevante. La aplicación también puede enviar recordatorios y mostrar un mapa de la ubicación.
-->

ParkSpot is a web application that helps users register and remember the exact location of their parking spot.

It allows users to register the location of their car in a parking lot, including details such as the spot number, level, and any other relevant information. The application can also send reminders and display a map of the location.

![ParkSpot](https://i.giphy.com/Ak8asl6uQKmre.webp)

## Functional

### Use cases

User
<!-- 
- Registrar la ubicación de la plaza de parking
- Añadir detalles como número de plaza y nivel 
- Ver un mapa de la ubicación del parking 
- Recibir recordatorios de la ubicación del coche 
- Compartir la ubicación con otros usuarios
- Crear BD entre varios usuarios para conocer las dimensiones del parking
-->

- Register the parking spot location
- Add details such as spot number and level
- View a map of the parking location
- Receive reminders of the car's location
- Share the location with other users
- Create a database between several users to know the dimensions of the parking lot


### UI Design


[Prototype](https://www.figma.com/proto/ZwUGeEDRIT5bqBeIfFA0KI/ParkSpot?node-id=0-1&t=03lSJ2V6FJVvG9Xb-1)

## Technical

### Blocks

- App (UI)
- API (core)
- DB (data)

### Packages

- app (front-end)
- api (back-end)
- com (validation, errors)
- doc (documentation)

### Techs

- HTML/CSS/JS
- React
- Tailwind
- Express
- Node
- Mongo

### Data Model

- User
    - name (string, required)
    - email (string, required)
    - username (string, required)
    - password (string, required)

<!-- Car
    - _id (uuid)
    - regis (string, required)
    - brand (string, required)
    - model (string, required)
    - user (User.id) -->

- Parking
    - name (string, required)
    - address (string, required)
    - city (string, required)
    - levels (number, required)
    - price ( number, required)
    - capacity  (number,required)

- Place
    - parking : (Parking.id, required)
    - level (string, required)
    - space (string, required)
    - checkin (date, required)
    - checkout (date, required)
    - location (?, required) <!-- geolocalizacion -->
    - freePlace : (boolean,required)  

## Additional notes

### Data

1. All models includes _id (uuid)

#### Parking

1. Price in euros / min

### Others

Native language: Spanish

### Versions