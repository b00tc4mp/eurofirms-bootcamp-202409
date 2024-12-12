import registerUser from './registerUser.js'

try {
    registerUser('Peter Pan', 'peter@pan.com', 'peterpan', '123123123')

    console.log('usuario registrado')
} catch (error) {
    console.error(error)
}