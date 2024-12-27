import getUserName from './getUserName.js'

try {
    const name = getUserName('4qv3jnp9qzq', '4qv3jnp9qzq')

    console.log(name)
} catch (error) {
    console.error(error)
}