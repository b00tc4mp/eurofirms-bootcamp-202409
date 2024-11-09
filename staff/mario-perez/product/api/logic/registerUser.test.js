import registerUser from './registerUser.js'

try {
    registerUser('Mario Pan', 'mario@pan.com', 'mariopan', '123123123')

    console.log('user registered')
} catch (error) {
    console.error(error)
}