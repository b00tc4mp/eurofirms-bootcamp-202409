import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getFavItems(userId) {
    validate.userId(userId)

    return User.findById(userId)
        .populate({ //populate es secuencial, es decir, cada uno sobreescribe sobre el anterior
            path: 'favs', //-> escoge sólo la propiedad favs para poblar 
            select: '-__v', // -> elimina esos campos (-)
            populate: {
                path: 'author', // escoge la propiedad author para poblar
                select: 'username -_id'  // selecciona username y elimina id (-)
            }
        }).lean()
        .catch(error => {
            throw new SystemError(error.message)
        })
        .then(user => {
            if (!user) throw new NotFoundError('User not found')

            user.favs.forEach(fav => {
                fav.id = fav._id.toString()
                delete fav._id

                fav.own = user.favs.includes(fav.id)
            })
            return user.favs
        })

}

export default getFavItems