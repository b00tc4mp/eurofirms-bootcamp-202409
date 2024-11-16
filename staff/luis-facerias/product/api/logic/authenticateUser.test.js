import authenticateUser from './authenticateUser.js'

try {
    const userId = authenticateUser('peterpan', '123123123')

    consolelog(userId)
} catch (error) {
    console.error(error);
}