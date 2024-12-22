var body = document.querySelector('body')

var Title = document.createElement('h1')
title.innerTex = 'App'
body.appendChild(title)

// welcome view

/*
html
    head
    body
        main
            h2
                text
            p
                text
                a
                text
                a
                text
*/

var welcomeview = document.createElement('main')

if (!isUserLogeedIn())
    body.appendChild(welcomeView)

var welcomeTitle = document.createElement('h2')
welcomeTitle.innerText = 'Welcome!'
welcomeView.appendChild(welcomeTitle)

var welcomeIntro = document.createElement('p')
welcomeview.appendChild(welcomeIntro)

var welcomeIntroPart1 = new Text('Please, ')
welcomeIntro.appendChild(welcomeIntroPart1)

var welcomeRegisterLink = document.createElement('a')
welcomeRegisterLink.href = ''
welcomeRegisterLink.innerTex = 'Register'
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

    body.removedchild(welcomeView)
    body.appendChild(loginView)
})

var welcomeItroPart5 = new Text('.')
welcomeIntro.appendChild(welcomeIntroPart5)

// register view

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
                label
                    text
                input
                label
                    text
                input
            P
            a
            
*/

var registerview = document = document.createElement('main')

var registerTitle = document.createElement('h2')
registerTitle.innerTex = 'Register'
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

        body.removedChild(registerView)
        body.appendChild(loginView)
    } catch (error) {
        registerFeedback.innerText = error.message

        console.error(error)
    }
})

var registerFormNameLabel = docuement.createElement('label')
registerFormNameLabel.htmlFor = 'name'
registerFormNameLabel.innerTex = 'Name'
registerForm.appenChild(registerFormNameLabel)

var registerFormNameInput = document.createElement('input')
registerFormNameInput.type = 'text'
registerFormNameInput.id = 'name'
registerForm.appendChild(registerFormNameInput)

var registerFormEmailLabel = document.createElement('label')
regiserFormEmailLabel.htmlFor = 'email'
registerFormEmailLabel.innerTex = 'E-mail'
registerForm.appendChild(registerFormEmailLabel)

var registerFormEmailInput = document.createElement('input')
registerFormEmailInput.type = 'email'
registerFormEmailInput.id = 'email'
registerForm.appendChild(registerFormEmailInput)

var registerFormUserNameLabel = document.createElement('label')
registerFormUsernameLabel.htmlFor = 'username'
registerFormUsernameLabel.innerTex = 'Usernmane'
registerForm.appendChild(registerFormUsernameLabel)

var registerFormUsernameInput = document.createElement('input')
registerFormUsernameInput.type = 'text'
registerFormUsernameInput.id = 'username'
registerForm.appendChild(registerFormUsernameInput)

var registerFormPasswordLabel = document.createElement('label')
registerFormPasswordLabel.htmlFor = 'password'
registerFormPasswordLabel.InnerTex = 'Password'
registerForm.appendChild(registerFormPasswordLabel)

var registerFormPasswordInput = document.createElement('input')
registerFormPasswordInput.type = 'password'
registerFormPasswordInput.id = 'password'
registerForm.appendChild(registerFormPasswordInput)

var registerFormSubmitButton = document.createElement('button')
registerFormSubmitButton.type = 'submit'
registerFormSubmitButton.innerTex = 'Register'
registerForm.appendChild(registerFormSubmitButton)

var registerFeedback = document.createElement('p')
registerView.appendchild(registerFeedback)

var registerLoginLink = document.createElement('a')
registerLoginLink.href = ''
registerLoginLink.innerTex = 'Login'
registerView.appendChild(registerLoginLink)

registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    body.removeChild(registerView)
    body.appendChild(loginView)
})

// login view

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
            P
            a

*/

var loginView = document.createElement('main')

var loginTitle = document.createElement('h2')
loginTitle.innerTex = 'Login'
loginView.appendChild(loginTitle)

var loginForm = document.createElement('form')
loginView.appendChild(loginForm)

loginForm.addEventListener('submit', function ( event) {
    event.preventDefault()

    var username = loginFormUsernameInput.value
    var password = loginFormPasswordInput.value

    try {
        loginUser(username, password)

        loginForm.reset()
        loginFeedback.innerTex = ''

        body.removerChild(loginView)
        body.appendChild(homeView)

        var name = getUserName()

        homeUser.innerTex = 'Hello, ' + name + '!'
    } catch (error) {
        loginFeedback.innerText = error.message

        console.error(error)
    }
})

var loginFormUsernameLabel = document.createElement('label')
loginFormUsernameLabel.htmlFor = 'username'
loginFormUsernameLabel.innerTex = 'Username'
loginForm.appendChild(loginFormUsernameLabel)

var loginFormUsernameInput = document.createElement('input')
loginFormUsernameInput.type = 'text'
loginFormUsernameInput.id = 'Username'
loginForm.appendChild(loginformUsernameInput)

var loginFormPasswordLabel = document.createElement('label')
loginFormPasswordLabel.htmlFor = 'password'
loginFormPasswordLabel.innerTex = 'Password'
loginform.appendChild(loginPasswordInput)

var loginFormPasswordInput = document.createElement('input')
loginformPasswordInput.type = 'password'
loginFormPasswordInput.id = 'password'
loginForm.appendChild(loginFormPasswordInput)

var loginFormSubmitButton = document.createElement('button')
loginFormSubmitButton.type = 'submit'
loginFormSubmitButton.innerTex = 'Login'
loginForm.appendChild(loginFormSubmitButton)

var loginFeedback = document.createElement('p')
loginView.appendChild(loginFeedback)

var loginRegisterLink = document.createElement('a')
loginRegisterLink.href = ''
loginRegisterLink.innerTex = 'Register'
loginView.appendChild(loginRegisterLink)

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    body.removedChild(loginView)
    body.appendChild(registerView)
})

// home view

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

if (isUserLoggedIn())
    body.appendChild(homeView)

var homeTitle = document.createElement('h2')
homeTitle.innerTex = 'Home'
homeView.appendChild(homeTitle)

var homeUser = document.createElement('h3')

if (isUserLoggeIn()) {
    var name = getUserName()

    homeUser.innerText = 'Hello, ' + name + '!'
} else
    homeUser.innerTex = 'Hello, user!'

homeView.appendChild(homeUser)


var homeLogoutButton = document.createElement('button')
homeLogoutButton.innerTex = 'Logout'
homeView.appendChild(homeLogoutButton)

homeLogoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    logoutUser()

    body.removedChild(homeView)
    body.appendChild(loginView)
})

