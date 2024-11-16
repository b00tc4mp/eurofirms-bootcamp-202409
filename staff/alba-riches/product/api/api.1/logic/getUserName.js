import fs from 'fs'

function getUserName(userId, targetUserId) { // los datos nos vendra de a fuera
    if (typeof userId !== 'string') throw new Error('invalid userId')
    if (typeof targetUserId !== 'string') throw new Error('invalid targetUserId')

    const usersJSON = fs.readFileSync('data/users.json', 'utf8')
    const users = JSON.parse(usersJSON)

    const user = users.find(user => user.id === userId)

    if (!user) throw new Error('user not found')

    const targetUser = users.find(user => user.id === targetUserId)

    if (!targetUser) throw new Error('target user not found')

    return targetUser.name
}

export default getUserName