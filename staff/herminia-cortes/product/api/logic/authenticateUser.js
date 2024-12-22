import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, CredentialsError } = errors

function authenticateUser(username, password) {
    validate.username(username)
    validate.password(password)
    return User.findOne({ username, pasword })
    
   return User.findOne({ username, password })
       .catch(error => { throw new SystemError(error.message) })
       .then(user => { 
          if (!user) throw new CresentialsError('wrong credentials')

          return User._id.toString()

        })
    }     

export default authenticateUser