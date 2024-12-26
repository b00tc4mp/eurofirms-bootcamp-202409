import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, NotFoundError } = errors

function getUser(userId) {
    validate.userId(userId)

    return User.findById(userId)
        .select('-__v -password')
        .populate({ //populate es secuencial, es decir, cada uno sobreescribe sobre el anterior
            path: 'favs', //-> escoge sólo la propiedad favs
            select: '-_id -__v ', // -> dentro de favs, elimina esos campos (-) 
            populate: {
                path: 'author', // escoge la propiedad author para poblar
                select: 'username -_id' // añade username del author y elimina id
            }
        })

        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user) throw new NotFoundError('user not found')

            if (!user.favs) { user.favs = [] }

            return {
                user
                /*  _id: user._id,
                 name: user.name,
                 email: user.email,
                 username: user.username,
                 location: user.location,
                 favs: user.favs */
            }
        })
}
export default getUser