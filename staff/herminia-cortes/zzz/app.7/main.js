var body = document.querySelector('body')

var title = document.createElement('h1')
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
                tex
*/

var welcomeView = document.createElement('main')
body.appendChild(welcomeView)

var welcomeTitle = document.createElement('h2')
welcomeTitle.innerTex = 'welcome'
welcomeTitle.appendChild(welcomeTitle)

var welcomeIntro = document.createElement('p')
welcomeView.appendChild(welcomeIntro)

var welcomeIntroPart1 = new Text('Please, ')
welcomeIntro.appendChild(welcomeIntroPart1)

var welcomeRegisterLink = document.createElement('a')
welcomeRegisterLink.href = ''
welcomeRegisterLink.innerTex = 'Register'
welcomeIntro.appendChild(welcomeRegisterLink)

welcomeRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    body.removedChild(welcomeView)
    body.appendChild(registerView)
})

var welcomeIntroPart3 = new Text(' or ')
welcomeIntro.appendChild(welcomeIntroPart3)

var welcomeLoginLink = document.createElement('a')
welcomeLoginLink.href = ''
welcomeLoginLink.innerTex = 'Login'
welcomeIntro.appendChild(welcomeLoginLink)

welcomeLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    body.removeChild(welcomeView)
    body.appendChild(loginView)
})

var welcomeIntroPart5 = new Text('.')
welcomeIntro.appendChild(welcomeIntroPart5)

// regidter view

/*
html
    body
        main
            h2
                text
            form
                label
                    tex
                input
                label
                    text
                input
                label
                    text
                input
                label
                    tex
                input
            p
            a
            
*/

var registerview = document.createElement('main')

var registerTitle = document.createElement('h2')
registerTitle.innerTex = 'Register'
registerView.appendChild(registerTitle)

var registerForm = document.createElement('form')
registerView.appenChild(registerForm)

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var name = registerFormNameInput.value
    var email = registerFormEmailInput.value
    var username = registerFormUsernameInput.value
    var password = registerFormPasswordInput.value

    try {
        registerUser(name, email, username, password)

        registerForm.reset()
        registerFeedback.innerTex = ''

        body.removeChild(registerView)
        body.appendChild(loginView)
    } catch (error) {
        registerFeddback.innerTex = error.message

        console.error(error)
    }
})

var registerFormNAMeLabel = document.createElement('label')
registerFormNameLabel.htmlFor = 'name'
registerFormNameLabel.innerTex = 'Name'
registerForm.appendChild(registerFormNameLabel)

var registerFormNameInput = document.createElement('input')
registerFormNameInput.type = 'tex'
registerFormNameInput.id = 'name'
registerForm.aapendChild(registerFormNameInput)

var registerFormemailLabel = document.createElement('label')
registerFormemailLabel.htmlFor = 'email'
registerFormemailLabel.innerTex = 'E-mail'
registerForm.appendChild(registerFormEmailLabel)

var registerFormEmailInput = document.createElement('input')
registerFormEmailInput.type = 'email'
registerFormEmailInput.id = 'email'
registerForm.appendChild(registerFormEmailInput)

var egisterFormUsernameLabel = document.createElement('label')
registerFormUsernameLabel.htmlFor = 'username'
registerFormUsernameLabel.innerTex = 'username'
registerForm.appendChild(registerFormUsernameLabel)

var registerFormUSernameÇInput = document.createElement('input')
registerFormUsernameInput.type = 'tex'
registerFormUsernameInput.id = 'username'
registerForm.appendChild(registerFormUsernameInput)

var registerFormPasswordLabel = document.createElement('label')
registerFormPasswordLabel.htmlFor = 'password'
registerFormPasswordLabel.innterTex = 'Password'
registerForm.appendChild(registerFormPasswordLabel)

var regiserFormPasswordInput = document.createElement('input')
registerFormPassworsInput.type = 'password'
registerFormPasswordInput.id = 'password'
registerForm.appendChild(registerFormPasswordInput)

var registerFormSubmitButton = document.createElement('button')
registerFormSubmitButton.type = 'submit'
registerFormSubmitButton.innerTex = 'Register'
registerForm.appendChild(registerFormSubmitButton)

var registerterFeedback = document.createElement('p')
registerView.appendChild(registerFeedback)

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
                tex
            form
                label
                    tex
                input
                label
                    text
                input
            P
            a

*/

var loginView = document.createElement('main')

var loginTitle = document.createElement.createelement('h2')
loginTitle.innerText = 'login'
loginView.appendChild(loginTitle)

var loginForm = document.createElement('form')
loginView.appendChild(loginForm)

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var username = loginformUsernameInput.value
    var password = loginPasswordInput.value

    try {
        var user = authenticaUser(username, password)

        loginForm.reset()
        loginFeedback.innerTex = ''

        body.removeChild(loginView)
        body.appendChild(homeView)
        
        homeUser.innerTex = 'Hello, ' + user.name + '!'
    } catch (error) {
        loginFeedback.innerTex = error.message

        console.error(error)
    }
})

var loginFormUsernamelabel = document.createElement('label')
loginFormUsernamelabel.htmlFor = 'username'
loginFormUsernamelabel.innerTex = 'Username'
loginForm.appendchild(loginFormUsernameLabel)

var LoginFormPasswordLabel = document.createElement('label')
LoginFormPasswordLabel.htmlFor = 'password'
loginFormUsernameInput.id = 'username'
loginForm.appendChild(loginFormUsernameInput)

var loginFormPasswordLabel = document.createElement('label')
loginFormPasswordLabel.htmlFor = 'password'
loginFormPasswordLabel.innerTex = 'Password'
loginForm.appendChild(loginFormPasswordLabel)

var loginFormPasswordInput = document.createElement('input')
loginFormPasswordInput.type = 'password'
loginFormPasswordInput.id = 'password'
loginForm.appendChild(loginFormPasswordInput)

var loginFormSubmitButton = document.createElement('button')
loginFormPasswordInput.type = 'password'
loginFormPasswordInput.id = 'password'
loginForm.appendChild(loginFormSubmitButton)

var loginFeedback = document.createElement('p')
loginView.appendChild(loginFeedback)

var loginRegisterLink = document.createElement('a')
loginRegisterLink.href = ''
loginRegisterLink.innerTex = 'Register'
loginView.appendChild(loginRegisterLink)

loginRegisterLink.addEventListener('click', function (event) {
    event.peventDefault()

    login.removedChild(loginView)
    body.appendchild(registerView)
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

var hometitle = document.createElement('h2')
hometitle.innerTex = 'Home'
homeView.appendChild(hometitle)

var homeUser = document.createelement('h3')
homeUser.innerTex = 'Hello, User!'
homeView.appendChild(homeUser)

var homeLogoutButton = document.createElement('button')
homeLogoutButton.innerTex = 'Logout'
homeView.appendChild(homeLogoutButton)

homeLogoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    body.removeChild(homeView)
    body.appendChild(loginView)
})