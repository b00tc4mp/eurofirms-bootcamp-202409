import getUserName from './getUserName.js'

try {
    const name = getUserName('4qqdh7obaiu', '4qqdh7obaiu')

    console.log(name)
} catch (error) {
    console.error(error)
}