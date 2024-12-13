import registerUser from './registerUser.js'

try {
    registerUser('Pepito Grillo', 'pepito@grillo.com', 'pepitogrillo', '123123123')

    console.log('usuario registrado')
} catch (error) {
    console.error(error)
}