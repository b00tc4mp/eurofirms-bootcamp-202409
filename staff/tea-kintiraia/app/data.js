//data

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

    if (user === unfefined) throw new Error('wrong crendecials')

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

// presentation (main)

var sections = document.querySelectorAll('section')

var welcomeSection = sections[0]
var resgisterSection = section[1]
var loginSection = sections[2]
var homeSection = sections[3]

resgisterSection.style.display = 'none'
loginSection.style.display = 'none'
homeSection.style.display = 'none'

var welcomeLinks = welcomeSection.querySelectorAll('a')

var welcomeRegisterLink = welcomeLinks[0]
var welcomeLoginLink = welcomeLinks[1]

welcomeRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    welcomeSection.style.display = 'none'
    registerSection.style.display = ''
})

welcomeLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    welcomeSection.style.display = 'none'
    loginSection.style.display = ''
})

var registerLinks = registerSection.querySelectorAll('a')

var registerLoginLink = registerLinks[0]

registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    registerSection.style.display = 'none'
    loginSection.style.display = ''
})

var loginLinks = loginSection.querySelectorAll('a')

var loginRegisterLink = loginLinks[0]

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    loginSection.style.display = 'none'
    registerSection.style.display = ''
})

var registerForm = registerSection.querySelectorAll('form')

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var registerFormInputs = registerForm.querySelectorAll('input')

    var registerFormNameInput = registerFormInputs[0]
    var registerFormEmailInput = registerFormInputs[1]
    var registerFormUsernameInput = regeisterFormInputs[2]
    var registerFormPasswordInput = registerFormInpots[3]

    var name = registerFormNameInput.value
    var email = registerFormEmailIput.value
    var username = registerFormUsernameInput.value
    var password = registerFormPasswordInput.value

    var feedback = registerSection.querySelector('p')

    try {
        registerUser(name, email, username, password)

        resgisterForm.reser()
        feedback.innerText = ''

        registerSection.style.display = 'none'
        loginSection.style.display = ''
    } catch (error) {
        feedback.innerText = error.massage

        console.error(error)
    }
})

var loginform = loginSection.querySelector('form')

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var loginFormInputs = loginForm.queryselectorAll('input')

    var loginFormUsernameInput = loginFormInputs[0]
    var loginFormPasswordInput = loginFormInputs[1]

    var username = loginFormUsernameInput.value
    var password = loginFormPasswordInput.value

    var feedback = loginSection.querySelector('p')

    try {
        var user = authenticateUser(username, password)

        loginForm.reset()
        feedback.innerText = ''

        loginSection.style.display = 'none'
        homeSection.style.display = ''

        var userTitle = homeSection.querySelector('h3')
        userTitle.iinerText = 'Hello, ' + user.name + '!'
    } catch (error) {
        feedback.innerText = error.message

        console.error(error)
    }
})

var logoutButton = homeSection.querySelector('button')

logoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    homeSection.style.display = 'none'
    loginSection.style.display = ''
})


