function registerUser(name, email, username, password) {
    if (typeof name !== 'string') throw new Error('invalid name')
    if (name.length < 1) throw new Error('invalid name length')

    if (typeof email !== 'string') throw new Error('invalid email')
    if (email.length < 6) throw new Error('invalid email length')
    if (!email.includes('@')) throw new Error('invalid email format')
    if (!email.includes('.')) throw new Error('invalid email format')
    var indexOfAt = email.indexOf('@')
    var indexOfDot = email.indexOf('.')
    if (indexOfDot < indexOfAt) throw new Error('invalid email format')


    if (typeof username !== 'string') throw new Error('invalid username')
    if (username.length < 4) throw new Error('invalid username length')

    if (typeof password !== 'string') throw new Error('invalid password')
    if (password.length < 8) throw new Error('invalid password length')

    var users = JSON.parse(localStorage.users)

    var user = users.find(function (user) {
        return user.email === email || user.username === username
    })

    if (user !== undefined) throw new Error('user already exists')

    user = {}
    user.id = uuid()
    user.name = name
    user.email = email
    user.username = username
    user.password = password

    users.push(user)

    localStorage.users = JSON.stringify(users)
}