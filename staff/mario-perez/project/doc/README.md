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

#### Actual use cases

User
<!-- 
- Registrar la ubicación de la plaza de aparcamiento
- Editar plaza de aparcamiento (detalles como matrícula, número de plaza y nivel)
- Quitar plaza de aparcamiento
- Ver un mapa de la ubicación del parking 
- Recibir recordatorios de la ubicación del coche y de la duracion del aparcamiento con un contador (v 0.1)
- Compartir la ubicación con otros usuarios (enviar email o qr)... (v 0.1)
- Crear BD entre varios usuarios para conocer las dimensiones del parking (v 0.1)
-->

- Add parking place
- Edit parking place ( details such as registration car, spot number and level)
- Remove place

#### Future use cases

<!-- - View a map of the parking location -->
- Receive reminders of the car's location and duration with a count (v 0.1)
- Share the location with other users (sending email or qr) (v 0.1)
- Create a database between several users to know the dimensions of the parking lot (v 0.1)


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

- Parking
    - name (string, required)
    - address (string, required)
    - city (string, required)
    - levels (number, required)
    - price (string, required)
    - capacity (number,required)

- Place
    - parking: (Parking.id, required)
    - level (number, required)
    - space (string, required)
    - checkin (date, required)
    - checkout (date, required)
    - vehicleRegistration (string, required, unique)
    - user: (User.id, required)  

## Additional notes

### Data

1. All models includes _id (uuid)

#### Parking

1. Price in cents / min

### Others

Native language: Spanish (Errors)

### Thanks



### Versions

#### Version 0.1

- Add parking place
- Edit parking place ( details such as registration car, spot number and level)
- Remove place

