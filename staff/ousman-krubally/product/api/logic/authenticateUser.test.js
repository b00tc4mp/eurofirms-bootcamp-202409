import authenticateUser from './authenticateUser.js'

try {
    const userId = authenticateUser('peteran', '123123123')

    console.log(userId)
} catch (error) {
    console.error(error)
 }