import getUserName from './getUserName.js'

try {
    const name = getUserName('4qh4hc5vzdu', '4qh4hc5vzdu')

    console.log(name)
} catch(error) {
    console.error(error)
}
