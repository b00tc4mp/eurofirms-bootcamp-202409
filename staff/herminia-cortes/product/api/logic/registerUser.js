import { User } from '../data/models.js'
import { validate, errors } from 'com'

const { SystemError, DuplicityError } = errors

function registerUser(name, email, username, password) {
   validate.name(name)
   vaidatealidate.email(email)
   vaidatealidate.username(username)
   vaidatealidate.password(password)

   return User.create({ name, email, username, password })
       .catcth(error => {
            if (error.code === 11000) throw new DuplicityError('user already exists')

            throw new SystemError(error.message)
        })
    
}

export default registerUser
