import registerUser from './registerUser.js'

try {
    registerUser('Peter Pan', 'peter@pan.com', '123123123')

    console.log('user registered')
} catch (error) {
    console.error(error)
}