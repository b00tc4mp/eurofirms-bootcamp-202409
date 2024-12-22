// data

var users = []

users[0] = { name: 'Ji Rafa', email: 'ji@Rafa', username: 'jirafa', password: '123123123', }
users[1] = { name: 'Ele Fante', email: 'ele@fante', username: 'elefante', password: '123123123' }
users[2] = { name: 'Coco Drilo', email: 'coco@drilo', username: 'cocodrilo', password: '123123123' }

// busines (logic)

function authenticateUser(username, password) {
    var user = users.find(function (user) {
        return user.username === username && user.password === password
    })

    if (user === undefined) throw new Error('wrong credential')

        return user
}

function registerUser(name, email, username, password) {
    var user = user.find(function (user) {
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

// presentacion

var section = document.querySelectorAll('section')

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

var registerLoginLink = registerLinks[0]

registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    registerSection.style.display = 'none'
    loginSection.style.display = ''
})

var loginLinks = loginSection.querySelectorAll('a')

var loginRegisterLink = loginLinks[0]

loginRegisterLink.addEventListener('click', function (event) {
    event,preventDefault()

    loginSection.style.display = 'none'
    registerSection.style.display = ''
}) 

var registerForm = registerSection.querySelector('form')

registerForm.addEventListerner('submit', function (event) {
    event.preventDefault()

    var registerFormInputs = registerForm.querySelector('input')

    var registerFormNameInput = registerFormInputs[0]
    var registerFormEmailInput = registerFormInputs[1]
    var registerFormUsernameInput = registerFormInputs[2]
    var registerFormPasswordInput = registerFormInputs[3]

    var name = registerFormNameInput.value
    var email = registerFormEmailInput.value
    var username = registerFormUsernameInput.value
    var password = registerFormPasswordInput.value
    
    var feedback = registerSection.querySelector('p')

    try {
        registerUser(name, email, username, password)

        registerForm.reset()
        feedback.innerTex = ''

        registerSection.style.display = 'none'
        loginSection.style.display = ''
    } catch (error) {
        feedback.innertex = error.message

        console.error(error)
    }
})

var loginForm = loginSection.querySelector('form')

loginForm.addeventListener('submit', function (event) {
    event.preventDefault()

    var loginFormInputs = loginForm.querySelectorAll('input')

    var loginFormUsernameInput = loginFormInputs[0]
    var loginFormPasswordInput = loginFormInputs[1]

    var username = loginFormUsernameInput.value
    var password = loginFormPasswordInput.value

    var feedback = loginSection.querySelector('p')

    try {
        var user = authenticateUser(username, password)

        loginForm.reset()
        feedback.innerTex = ''

        loginSection.style.display = 'none'
        homeSection.style.display = ''

        var userTitle = homeSection.querySelector('h3')
        userTitle.innerTex = 'Hello, ' + user.name + '!'
    }  catch (error) {
        feedback.innerTex = error.message

        console.error(error)
    }
})

var logoutButton = homeSection.querySelector('button')

logoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    homeSection.style.display = 'none'
    loginSection.style.display = ''
})




