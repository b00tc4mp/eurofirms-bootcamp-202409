import fs from 'fs'

function getUserName(userId, targetUserId) {
    if (typeof userId !== 'string')
        throw new Error('Id de usuario inválido')
    if (typeof targetUserId !== 'string')
        throw new Error('identificador de usuario no válido')

    const usersJSON = fs.readFileSync('data/users.json', 'utf8')
    const users = JSON.parse(usersJSON)

    const user = users.find(user => user.id === userId)

    if (user === undefined)
        throw new Error('usuario no encontrado')

    const targetUser = users.find(user => user.id === targetUserId)

    if (targetUser === undefined)
        throw new Error('Identificador de usuario no encontrado')

    return targetUser.name
}

export default getUserName