import registerUser from './registerUser.js'

try {
    registerUser('Sunny day', 'sunny@sun.com', 'sunny', '123123123')

    console.log('user registered')
} catch (error) {
    console.error(error)
}