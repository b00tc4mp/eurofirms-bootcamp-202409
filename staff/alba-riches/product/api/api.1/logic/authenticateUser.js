import fs from 'fs' // para poder guardar los datos en el disco duro,(fail sistem , trabajar con archivos y sistemas del ordenador)

function authenticateUser(username, password) {
    if (typeof username !== 'string') throw new Error('invalid username')
    if (username.length < 4) throw new Error('invalid username length')

    if (typeof password !== 'string') throw new Error('invalid password')
    if (password.length < 8) throw new Error('invalid password length')

    const usersJSON = fs.readFileSync('data/users.json', 'utf8')
    const users = JSON.parse(usersJSON)

    const user = users.find(user => user.username === username && user.password === password)

    if (!user) throw new Error('wrong credentials')

    return user.id
}

export default authenticateUser