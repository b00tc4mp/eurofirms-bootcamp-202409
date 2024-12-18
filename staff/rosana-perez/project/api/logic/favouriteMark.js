import { User, Item } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function favouriteMark(userId, itemId) {
    validate.userId(userId)
    validate.itemId(itemId)

    return Promise.all([
        User.findById(userId).populate('favourites', '_id'), //con .lean() no funciona el user.save() porque devuelve una cadena de datos, no un objeto de Mongoose
        Item.findById(itemId).lean()

    ])
        .catch(error => { throw new SystemError(error.message) })
        .then(([user, item]) => {

            if (!user) throw new NotFoundError('user not found')
            if (!item) throw new NotFoundError('item not found')

            const favouriteItemExists = user.favourites.some(favourites => favourites.equals(item._id)) //equals compara equivalencias entre objetos de Mongoose

            if (!favouriteItemExists) {

                user.favourites.push(item._id)

                return user.save()
                    .catch(error => { throw new SystemError(error.message) })

            } else {
                //buscar si un ítem (item._id) ya está en favoritos de un usuario ( saved in user.favourites)
                // con favourites => favourites.toString() === item._id.toString() no funciona, por la estructura de datos de Mongoose
                const index = user.favourites.findIndex(favourites => favourites.equals(item._id))
                if (index !== -1) {
                    user.favourites.splice(index, 1)
                } //Eliminamos el ítem si ya está, incluso si está duplicado

                return user.save()
                    .catch(error => { throw new SystemError(error.message) })
            }
        })
}

export default favouriteMark

