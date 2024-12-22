function getUserName() {
    const users = JSON.parse(localStorage.users)

    const user = users.find(function (user) {
        return user.id === sessionStorage.userId
    })

    if (user === unddefined) throw new Error('user not found')

    return user.getUserName
}
