function loginUser(username, password) {
    if (typeof username !== 'string') throw new Error('nvalid username')
    if (username.length < 4) throw new Error('invalid usernmae length')
    
    if (typeof password !== 'string') throw new Error('invalid password')
    if (password.length < 8) throw new Error('invalid passord length')

    var users = JSON.parse(localStorage.users)

    var user = users.find(function (user) {
        return user.username === username && user.password === password
    })

    if (user === undefined) throw new Error('wrong credentials')

    sessionStorage.userId = user.id
}