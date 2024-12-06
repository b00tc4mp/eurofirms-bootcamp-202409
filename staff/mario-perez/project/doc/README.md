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
-->

- Register the parking spot location
- Add details such as spot number and level
- View a map of the parking location
- Receive reminders of the car's location
- Share the location with other users


### UI Design


[Prototype](Link de Figma)

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
    - _id (uuid)
    - name (string, required)
    - email (string, required)
    - user (string, required)
    - password (string, required)

- Car
    - _id (uuid)
    - regis (string, required)
    - brand (string, required)
    - model (string, required)
    - user (User.id)

- Parking
    - name (string, required)
    - address (string, required)
    - city (string, required)
    - levels (number, required)
    - price ( number, required)

- Place
    - _id (uuid)
    - car (Car.regis)
    - level (string, required)
    - local (string, required)
    - checkin (date, required)
    - checkout (date, required)
    - time (date, required)

# Adicionnal notes

## Data

### Car

1. Regis is a registration number of car

### Parking

1. Price in euros / min