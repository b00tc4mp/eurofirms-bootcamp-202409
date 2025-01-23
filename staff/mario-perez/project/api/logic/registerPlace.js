import { User, Place, Parking } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, DuplicityError } = errors

function registerPlace(userId, parkingId, level, space, checkin, checkout, vehicleRegistration) {
    validate.userId(userId)
    validate.space(space)
    validate.level(level)
    validate.checkinAndCheckout(checkin, checkout)
    validate.vehicleRegistration(vehicleRegistration)

    return Place.find({ parking: parkingId, level, space }).lean() // Vemos si hay plazas que tienen los mismos datos
        .catch(error => { throw new SystemError(error.message) })
        .then(places => {
            const checkinObjMils = new Date(checkin).getTime()
            const checkoutObjMils = new Date(checkout).getTime()

            places.forEach(place => {

                // Comprobamos que el checkin de la nueva plaza no está entre el checkin y el checkout de las anteriores
                if (place.checkin.getTime() <= checkinObjMils && place.checkout.getTime() >= checkinObjMils)
                    throw new Error('El checkin se está intentando realizar en un tramo de tiempo ocupado')
                if (place.checkin.getTime() <= checkoutObjMils && place.checkout.getTime() >= checkoutObjMils)
                    throw new Error('El checkout se está intentando realizar en un tramo de tiempo ocupado')
                if (place.checkin.getTime() > checkinObjMils && place.checkout.getTime() < checkoutObjMils)
                    throw new Error('El periodo reservado ya contiene otra reserva')
            })

            return Place.create({ parking: parkingId, level, space, checkin, checkout, user: userId, vehicleRegistration })
                .catch(error => {
                    //if (error.code === 11000) throw new Error('La plaza no puede crearse')

                    throw new SystemError(error.message)
                })
        })


}

export default registerPlace