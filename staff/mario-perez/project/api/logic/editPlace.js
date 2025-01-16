import { errors, validate } from 'com'
import { Place, User } from '../data/models.js'

const { SystemError, NotFoundError, DuplicityError, OwnerShipError } = errors

function editPlace(userId, placeId, parkingId, level, space, checkin, checkout, vehicleRegistration) {
    validate.userId(userId)
    validate.placeId(placeId)
    validate.parkingId(parkingId)
    validate.space(space)
    validate.level(level)
    validate.checkinAndCheckout(checkin, checkout)

    return Promise.all([
        User.findById(userId).select('-__v _id').lean(),
        Place.findById(placeId).lean()
    ])
        /* .catch(error => { throw new SystemError(error.message) }) */
        .then(userAndPlace => {
            const [user, place] = userAndPlace
            console.log(user)
            if (!user) throw new NotFoundError('El dueño debe estar registrado')
            if (!place) throw new NotFoundError('La plaza no existe')

            if (place.user.toString() !== userId) throw new OwnerShipError('El usuario registrado no es el dueño')

            return Place.findOne({ parking: parkingId, level: level, space: space }).lean()//checkin: checkin, checkout: checkout
                .then(oldPlaceData => {
                    const newPlaceData = {
                        parkingId,
                        level,
                        space,
                        checkin,
                        checkout
                    }
                    //comprobar el espacio
                    if (oldPlaceData.parking.toString() === newPlaceData.parkingId && oldPlaceData.level === newPlaceData.level && oldPlaceData.space === newPlaceData.space) throw new DuplicityError('La plaza ya está ocupada')


                    //TODO verificar el tiempo
                    return Place.updateOne({ _id: placeId }, { parking: parkingId, level: level, space: space, checkin: checkin, checkout: checkout, user: userId })
                        .catch(error => {
                            throw new SystemError(error.message)
                        })
                })
        })
        .then(() => { })
}

export default editPlace