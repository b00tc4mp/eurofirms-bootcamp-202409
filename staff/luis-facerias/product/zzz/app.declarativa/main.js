var users = []

users[0] = { name: "luis", email: "luis@luis.es", username: "luis", password: "luispwd" }
users[1] = { name: "pepe", email: "pepe@pepe.es", username: "pepe", password: "pepepwd" }

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

var registerLinks = registerSection.querySelectorAll('a')
var registerLoginLinks = registerLinks[0]

registerLoginLinks.addEventListener('click', function (event) {
    event.preventDefault()
    registerSection.style.display = 'none'
    loginSection.style.display = ''
})

var loginLinks = loginSection.querySelectorAll('a')
var loginRegisterLink = loginLinks[0]

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()
    registerSection.style.display = ''
    loginSection.style.display = 'none'
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
        return user.email === email || user.username === username
    })

    var feedback = registerSection.querySelector('p')

    if (user != undefined) {
        feedback.innerText = 'user already exists'

        return
    }

    var user = {}
    user.name = name
    user.email = email
    user.username = username
    user.password = password

    users.push(user)

    registerForm.reset()
    feedback.innerText = ''



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

    var user = users.find(function (user) {
        return user.username === username && user.password === password
    })

    var feedback = loginSection.querySelector('p')

    if (user === undefined) {
        feedback.innerText = 'wrong credentials'

        return
    }

    loginForm.reset()
    feedback.innerText = ''

    loginSection.style.display = 'none'
    homeSection.style.display = ''

    var userTitle = homeSection.querySelector('h3')
    userTitle.innerText = 'Hello, ' + user.name + '!'
})

var logoutButton = homeSection.querySelector('button')
logoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    homeSection.style.display = 'none'
    loginSection.style.display = ''

})