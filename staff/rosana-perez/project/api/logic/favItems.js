import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function favItems(userId) {
    validate.userId(userId)

    return User.findById(userId)
        .populate('favs')
        .populate({ //populate es secuencial, es decir, cada uno sobreescribe sobre el anterior
            path: 'favs', //-> escoge sólo la propiedad favs para poblar 
            select: '-_id -__v', // -> elimina esos campos (-)
            populate: {
                path: 'author', // escoge la propiedad author para poblar
                select: 'username -_id'  // selecciona username y elimina id (-)
            }
        })

        .then(user => {
            if (!user) throw new NotFoundError('User not found')
            return user.favs
        })
        .catch(error => {
            throw new SystemError(error.message)
        })
}

export default favItems