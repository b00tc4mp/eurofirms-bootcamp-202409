var users = []

users[0] = { name: 'Ji Rafa', email: 'ji@rafa.com', username: 'jirafa', password: '123123123' }
users[1] = { name: 'Ele Fante', email: 'ele@fante.com', username: 'elefante', password: '123123123' }
users[2] = { name: 'Coco Drilo', email: 'coco@drilo.com', username: 'cocodrilo', password: '123123123' }

// business (logic)

function authenticateUser(username, password) {
    if (typeof username !== 'string') throw new Error('invalid username')
    if (username.length < 4) throw new Error('invalid username length')

    if (typeof password !== 'string') throw new Error('invalid password')
    if (password.length < 8) throw new Error('invalid password length')

    var user = users.find(function (user) {
        return user.username === username && user.password === password
    })

    if (user === undefined) throw new Error('wrong crendecials')

    return user
}

function registerUser(name, email, username, password) {
    if (typeof name !== 'string') throw new Error('invalid name')
    if (name.length < 1) throw new Error('invalid name length')

    if (typeof email !== 'string') throw new Error('invalid email')
    if (email.length < 6) throw new Error('invalid email')
    if (!email.includes('@')) throw new Error('invalid email format')
    if (!email.includes('.')) throw new Error('invalid email format')
    var indexOfAt = email.indexOf('@')
    var indexOfDot = email.indexOf('.')
    if (indexOfDot < indexOfAt) throw new Error('invalid email format')
    // <<<<---AÑADIR MÁS REGLAS DE VALIDACIÓN-(position of @ .)

    if (typeof username !== 'string') throw new Error('invalid username')
    if (username.length < 4) throw new Error('invalid username length')

    if (typeof password !== 'string') throw new Error('invalid password')
    if (password.length < 8) throw new Error('invalid password length')

    var user = users.find(function (user) {
        return user.email === email || user.username === username
    })

    if (user !== undefined) throw new Error('user already exists')

    user = {}
    user.name = name
    user.email = email
    user.username = username
    user.password = password

    users.push(user)
}