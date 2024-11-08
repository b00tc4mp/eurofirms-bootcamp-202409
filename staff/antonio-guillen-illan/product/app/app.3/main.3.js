//data
var users = []

users[0] = { name: 'Ji Rafa', email: 'ji@rafa.com', username: 'jirafa', password: '123123123' }
users[1] = { name: 'Ele Fante', email: 'ele@fante.com', username: 'elefante', password: '123123123' }
users[2] = { name: 'Coco Drilo', email: 'coco@drilo.com', username: 'cocodrilo', password: '123123123' }


// business (logic)

function authenticateUser(username, password) {
    var user = users.find(function (user) {
        return user.username === username && user.password === password
    })

    if (user === undefined) throw new Error('wrong credentials')

    return user
}

// presentation 

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

var loginRegisterLinks = loginLinks[0]

loginRegisterLinks.addEventListener('click', function (event) {
    event.preventDefault()

    loginSection.style.display = 'none'
    registerSection.style.display = ''

})

var registerForm = registerSection.querySelector('form')


registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var registerFormInputs = registerForm.querySelectorAll('input')

    var registerFormNameImput = registerFormInputs[0]
    var registerFormEmailImput = registerFormInputs[1]
    var registerFormUsernameImput = registerFormInputs[2]
    var registerFormPasswordImput = registerFormInputs[3]

    var name = registerFormNameImput.value
    var email = registerFormEmailImput.value
    var username = registerFormUsernameImput.value
    var password = registerFormPasswordImput.value

    var feedback = registerSection.querySelector('p')

    try {
        registerUser(name, email, username, password)

        registerForm.reset()
        feedback.innerText = ''

        registerSection.style.display = 'none'
        loginSection.style.display = ''
    }

    catch (error) {
        feedback.innerText = error.message

        console.error(error)
    }
})

var loginForm = loginSection.querySelector('form')

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var loginFormImputs = loginForm.querySelectorAll('input')

    var loginFormusernameImputs = loginFormImputs[0]
    var loginFormpasswordImputs = loginFormImputs[1]

    var username = loginFormusernameImputs.value
    var password = loginFormpasswordImputs.value

    var feedback = loginSection.querySelector('p')

    try {
        var user = authenticateUser(username, password)

        loginForm.reset()
        feedback.innerText = ''

        loginSection.style.display = 'none'
        homeSection.style.display = ''

        var userTitle = homeSection.querySelector('h3')
        userTitle.innerText = 'Hello, ' + user.name + '!'
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
