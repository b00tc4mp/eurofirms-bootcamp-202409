import registerUser from './registerUser.js'

try {
    registerUser('hello world', 'hello@world.com', 'helloworld', '123123123')

    console.log('user register')
} catch (error) {
    console.error(error)
}