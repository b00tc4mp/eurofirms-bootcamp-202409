//data

var users = []

users[0] = { name: 'peterpan', email: 'peter@pan.com', username: 'peterpan', password: '123123123' }
users[1] = { name: 'Ele Fante', email: 'ele@fante.com', username: 'elefante', password: '123123123' }
users[2] = { name: 'Coco Drilo', email: 'coco@drilo.com', username: 'cocodrilo', password: '123123123' }

// logic

function authenticateUser(username, password) {
    var user = users.find(function (user) {
        return user.username === username && user.password === password
    })

    if (user === undefined)
        throw new Error('Credenciales erróneas')

    return user
}

//presentation

var sections = document.querySelectorAll('section')

var welcomeSection = sections[0]
var registerSection = sections[1]
var loginSection = sections[2]
var homeSection = sections[3]

registerSection.style.display = 'none'
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

var registerLoginLink = registerSection.querySelector('a')

registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    registerSection.style.display = 'none'
    loginSection.style.display = ''
})

var loginRegisterLink = loginSection.querySelector('a')

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    loginSection.style.display = 'none'
    registerSection.style.display = ''
})

var registerForm = registerSection.querySelector('form')

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var registerFormInputs = registerForm.querySelectorAll('input')

    var registerFormNameInput = registerFormInputs[0]
    var registerFormEmailInput = registerFormInputs[1]
    var registerFormUsernameInput = registerFormInputs[2]
    var registerFormPasswordInput = registerFormInputs[3]

    var name = registerFormNameInput.value
    var email = registerFormEmailInput.value
    var username = registerFormUsernameInput.value
    var password = registerFormPasswordInput.value

    var user = users.find(function (user) {
        return user.email === email || user.username
    })


    if (user !== undefined) {
        alert('El usuario ya existe')

        return

    }

    var user = []
    user.name = name
    user.email = email
    user.username = username
    user.password = password

    users.push(user)

    registerForm.reset()

    registerSection.style.display = 'none'
    loginSection.style.display = ''

})

var loginForm = loginSection.querySelector('form')



loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var loginFormInputs = loginForm.querySelectorAll('input')

    var loginFormUsernameInput = loginFormInputs[0]
    var loginFormPasswordInput = loginFormInputs[1]

    var username = loginFormUsernameInput.value
    var password = loginFormPasswordInput.value

    try {
        var user = authenticateUser(username, password)

        var errorLoginPanel = loginSection.querySelector('p')

        if (user === undefined) {
            // alert('Credenciales erróneas')
            errorLoginPanel.innerText = 'Credenciales erróneas'
            return
        }

        loginForm.reset()
        errorLoginPanel.innerText = ''

        loginSection.style.display = 'none'
        homeSection.style.display = ''


        var userTitle = homeSection.querySelector('h2')

        userTitle.innerText = 'Bienvenido, ' + user.name
    } catch (error) {
        var loginErrorPanel = loginSection.querySelector('p')

        loginErrorPanel.innerText = error.message

        console.error(error)
    }
})

var logoutButton = homeSection.querySelector('button')

logoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    homeSection.style.display = 'none'
    loginSection.style.display = ''
})