// business (logic)

// presentation

/*
html
    head
    body
        main
            h2
            p
                text
                a
                text
                a
                text

*/

var body = document.querySelector('body')

var title = document.createElement('h1')
title.innerText = 'App'
body.appendChild(title)

// welcome View

var welcomeView = document.createElement('main')
body.appendChild(welcomeView)

var welcomeTitle = document.createElement('h2')
welcomeTitle.innerText = 'Welcome!'
welcomeView.appendChild(welcomeTitle)

var welcomeIntro = document.createElement('p')
welcomeView.appendChild(welcomeIntro)

var welcomeIntroPart1 = new Text('Please, ')
welcomeIntro.appendChild(welcomeIntroPart1)

var welcomeRegisterLink = document.createElement('a')
welcomeRegisterLink.href = ''
welcomeRegisterLink.innerText = 'Register'
welcomeIntro.appendChild(welcomeRegisterLink)

welcomeRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    body.removeChild(welcomeView)
    body.appendChild(registerView)
})

var welcomeIntroPart3 = new Text(' or ')
welcomeIntro.appendChild(welcomeIntroPart3)

var welcomeLoginLink = document.createElement('a')
welcomeLoginLink.href = ''
welcomeLoginLink.innerText = 'Login'
welcomeIntro.appendChild(welcomeLoginLink)

welcomeLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    body.removeChild(welcomeView)
    body.appendChild(loginView)
})

var welcomeIntroPart5 = new Text('.')
welcomeIntro.appendChild(welcomeIntroPart5)

// Register View
/* 
html
    head
    body
        main
            h2
                text
            form
                label
                    text
                input
                label
                    text
                input
                label  
                    text
                input
                label
                    text
                input
            p
            a
            
*/

var registerView = document.createElement('main')

var registerTitle = document.createElement('h2')
registerTitle.innerText = 'Register'
registerView.appendChild(registerTitle)

var registerForm = document.createElement('form')
registerView.appendChild(registerForm)

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()


    var name = registerFormNameInput.value
    var email = registerFormEmailInput.value
    var username = registerFormUsernameInput.value
    var password = registerFormPasswordInput.value

    try {
        registerUser(name, email, username, password)

        registerForm.reset()
        registerFeedback.innerText = ''

        body.removeChild(registerView)
        body.appendChild(loginView)
    } catch (error) {
        registerFeedback.innerText = error.message

        console.error(error)
    }

})

var registerFormNameLabel = document.createElement('label')
registerFormNameLabel.htmlFor = 'name'
registerFormNameLabel.innerText = 'Name'
registerForm.appendChild(registerFormNameLabel)

var registerFormNameInput = document.createElement('input')
registerFormNameInput.type = 'text'
registerFormNameInput.id = 'name'
registerForm.appendChild(registerFormNameInput)

var registerFormEmailLabel = document.createElement('label')
registerFormEmailLabel.htmlFor = 'email'
registerFormEmailLabel.innerText = 'E-mail'
registerForm.appendChild(registerFormEmailLabel)

var registerFormEmailInput = document.createElement('input')
registerFormEmailInput.type = 'email'
registerFormEmailInput.id = 'email'
registerForm.appendChild(registerFormEmailInput)

var registerFormUsernameLabel = document.createElement('label')
registerFormUsernameLabel.htmlFor = 'username'
registerFormUsernameLabel.innerText = 'Username'
registerForm.appendChild(registerFormUsernameLabel)

var registerFormUsernameInput = document.createElement('input')
registerFormUsernameInput.type = 'text'
registerFormUsernameInput.id = 'username'
registerForm.appendChild(registerFormUsernameInput)

var registerFormPasswordLabel = document.createElement('label')
registerFormPasswordLabel.htmlFor = 'password'
registerFormPasswordLabel.innerText = 'Password'
registerForm.appendChild(registerFormPasswordLabel)

var registerFormPasswordInput = document.createElement('input')
registerFormPasswordInput.type = 'password'
registerFormPasswordInput.id = 'password'
registerForm.appendChild(registerFormPasswordInput)

var registerFormSubmitButton = document.createElement('button')
registerFormSubmitButton.type = 'submit'
registerFormSubmitButton.innerText = 'Register'
registerForm.appendChild(registerFormSubmitButton)

var registerFeedback = document.createElement('p')
registerView.appendChild(registerFeedback)

var registerLoginLink = document.createElement('a')
registerLoginLink.href = ''
registerLoginLink.innerText = 'Login'
registerView.appendChild(registerLoginLink)

registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    body.removeChild(registerView)
    body.appendChild(loginView)
})

// Login View

/*
html
    body
        main
            h2
                text
            form
                label
                    text
                input
                label
                    text
                input
            p
            a

*/

var loginView = document.createElement('main')

var loginTitle = document.createElement('h2')
loginTitle.innerText = 'Login'
loginView.appendChild(loginTitle)

var loginForm = document.createElement('form')
loginView.appendChild(loginForm)

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var username = loginFormUsernameInput.value
    var password = loginFormPasswordInput.value

    try {
        var user = authenticateUser(username, password)

        loginForm.reset()
        loginFeedback.innerText = ''

        body.removeChild(loginView)
        body.appendChild(homeView)

        homeUser.innerText = 'Hello, ' + user.name + '!'
    } catch (error) {
        loginFeedback.innerText = error.message

        console.error(error)
    }
})

var loginFormUsernameLabel = document.createElement('label')
loginFormUsernameLabel.htmlFor = 'username'
loginFormUsernameLabel.innerText = 'Username'
loginForm.appendChild(loginFormUsernameLabel)

var loginFormUsernameInput = document.createElement('input')
loginFormUsernameInput.type = 'text'
loginFormUsernameInput.id = 'username'
loginForm.appendChild(loginFormUsernameInput)

var loginFormPasswordLabel = document.createElement('label')
loginFormPasswordLabel.htmlFor = 'password'
loginFormPasswordLabel.innerText = 'Password'
loginForm.appendChild(loginFormPasswordLabel)

var loginFormPasswordInput = document.createElement('input')
loginFormPasswordInput.type = 'password'
loginFormPasswordInput.id = 'password'
loginForm.appendChild(loginFormPasswordInput)

var loginFormSubmitButton = document.createElement('button')
loginFormSubmitButton.type = 'submit'
loginFormSubmitButton.innerText = 'Login'
loginForm.appendChild(loginFormSubmitButton)

var loginFeedback = document.createElement('p')
loginView.appendChild(loginFeedback)

var loginRegisterLink = document.createElement('a')
loginRegisterLink.href = ''
loginRegisterLink.innerText = 'Register'
loginView.appendChild(loginRegisterLink)

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    body.removeChild(loginView)
    body.appendChild(registerView)
})

// Home View

/*
html
    body
        main
            h2
                text
            h3
                text
            button
                text
*/

var homeView = document.createElement('main')


var homeTitle = document.createElement('h2')
homeTitle.innerText = 'Home'
homeView.appendChild(homeTitle)

var homeUser = document.createElement('h3')
homeUser.innerText = 'Hello, User!'
homeView.appendChild(homeUser)

var homeLogoutButton = document.createElement('button')
homeView.appendChild(homeLogoutButton)
homeLogoutButton.innerText = 'Logout'

homeLogoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    body.removeChild(homeView)
    body.appendChild(loginView)

})