import getUserName from './getUserName.js'

try {
    const name = getUserName('4qghhowdc64', '4qghhowdc64')

    console.log(name)
} catch (error) {
    console.error(error)
}