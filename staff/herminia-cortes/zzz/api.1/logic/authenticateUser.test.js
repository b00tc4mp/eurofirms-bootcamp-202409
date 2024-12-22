import authenticateUser from './authenticate.js'

try {
    const userId = authenticateUser('peterpan', '123123123')

    console.log(userId)
} catch (error) {
    console.error(error)
}