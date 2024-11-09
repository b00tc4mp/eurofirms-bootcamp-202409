import authenticateUser from './authenticateUser.js'

try {
    const usrId = authenticateUser('peterpan', '123123123')

    console.log(userId)
} catch (error) {
    console.error(error)
}