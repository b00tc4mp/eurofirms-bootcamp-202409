import { User, Place, Parking } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, DuplicityError } = errors

function registerPlace(userId, parkingId, level, space, checkin, checkout) {
    validate.userId(userId)
    validate.space(space)
    validate.level(level)
    validate.checkinAndCheckout(checkin, checkout)

    // TODO find place with parkingId, level and space.

    // If there are some place, throw error, else create new place.

    // if (Place.findById(parkingId)) {
    //     if (Place.findOne({ level: level })) {
    //         if (Place.findOne({ space: { space: space } })) throw new DuplicityError('La plaza ya está ocupada porque ya existe')
    //     }
    // }
    return Place.findOne({ parking: parkingId, level, space }).lean()
        .catch(error => { throw new SystemError(error.message) })
        .then(place => {
            if (place) throw new DuplicityError('la  plaza ya existia')

            return Place.create({ parking: parkingId, level, space, checkin, checkout, user: userId })
                .catch(error => {
                    if (error.code === 11000) throw new DuplicityError('La plaza ya está ocupada')

                    throw new SystemError(error.message)
                })
        })


}

export default registerPlace