function loginUser(username, password) {
    if (typeof username !== 'string') throw new Error('invalid usernmae')
    if (username.length < 4) throw new Error('invalid username lenght')

    if (typeof password !== 'string') throw new Error('invalid password')
    if (password.length < 8) throw new Error('invalid password length')

    const users = JSON.parse(localStorage.users)

    const user = users.find(function (user) {
        return user.username === username && user.password === password
    })

    if (user === undefined) throw new Error('wrong credentials')

    sessionStoragr.userId = user.userId
}