var title = <h1>ParkSpot</h1>

var welcomeView = <main>
    <h2>ParkSpot</h2>
    <p>
        Bienvenido a ParkSpot, la app para localizar tu coche. Por favor, <a href="">regístrate</a> para comenzar.
        Si ya estás registrado, <a href="">inicia sesión</a>.
    </p>
</main>

var registerView = <main><h2>Registro</h2>
    <form>
        <label for="name">Nombre</label>
        <input type="text" id="name" />

        <label for="email">Correo electrónico</label>
        <input type="email" id="email" />

        <label for="username">Usuario</label>
        <input type="text" id="username" />

        <label for="password">Contraseña</label>
        <input type="password" id="password" />

        <button type="submit">Registrar</button>
    </form>

    <p></p>

    <p>¿Ya estás registrado? <a href="">Inicia sesión</a>.</p>

</main>

var loginView = <main>
    <h2>Iniciar sesión</h2>
    <p></p>
    <form>
        <label for="username">Usuario</label>
        <input type="text" id="username" />

        <label for="password">Contraseña</label>
        <input type="password" id="password" />

        <button type="submit">Iniciar sesión</button>
    </form>

    <p></p>

    <p>¿No estás registrado? <a href="">Regístrate ahora</a>.</p>

</main>

var rootElement = document.querySelector('#root')
var root = ReactDOM.createRoot(rootElement)


root.render([title, welcomeView, registerView, loginView])













/*var body = document.querySelector('body')

var title = document.createElement('h1')
title.innerText = 'ParkSpot'
body.append(title)

var welcomeView = document.createElement('main')

if (!isUserLoggedIn())
    body.appendChild(welcomeView)

//var welcomeTitle = document.createElement('h2')
//welcomeTitle.innerText = 'ParkSpot'
//welcomeView.append(welcomeTitle)

var welcomeIntro = document.createElement('p')
welcomeView.append(welcomeIntro)

var welcomeIntroPart1 = new Text('Bienvenido a ParkSpot, la app para localizar tu coche. Por favor, ')
welcomeIntro.append(welcomeIntroPart1)

var welcomeRegisterLink = document.createElement('a')
welcomeRegisterLink.href = ''
welcomeRegisterLink.innerText = 'regístrate'
welcomeIntro.append(welcomeRegisterLink)

welcomeRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    body.removeChild(welcomeView)
    body.append(registerView)
})

var welcomeIntroPart2 = new Text(' para comenzar. Si ya estás registrado ')
welcomeIntro.append(welcomeIntroPart2)

var welcomeLoginLink = document.createElement('a')
welcomeLoginLink.href = ''
welcomeLoginLink.innerText = 'inicia sesión'
welcomeIntro.append(welcomeLoginLink)

welcomeLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    body.removeChild(welcomeView)
    body.append(loginView)
})

var welcomeIntroPart3 = new Text('.')
welcomeIntro.append(welcomeIntroPart3)

welcomeView.append(welcomeIntro)
body.append(welcomeView)

// Register view

var registerView = document.createElement('main')

var registerTitle = document.createElement('h2')
registerTitle.innerText = 'Registro'
registerView.append(registerTitle)

var registerForm = document.createElement('form')
registerView.append(registerForm)

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var name = registerFormNameInput.value
    var email = registerFormEmailInput.value
    var username = registerFormUsernameInput.value
    var password = registerFormPasswordInput.value

    try {
        registerUser(name, email, username, password)

        registerForm.reset()
        registerErrorPanel.innerText = ''

        body.remove(registerView)
        body.append(loginView)
    } catch (error) {
        registerErrorPanel.innerText = error.message

        console.error(error)
    }
})

var registerFormNameLabel = document.createElement('label')
registerFormNameLabel.htmlFor = 'name'
registerFormNameLabel.innerText = 'Nombre'
registerForm.append(registerFormNameLabel)

var registerFormNameInput = document.createElement('input')
registerFormNameInput.type = 'text'
registerFormNameInput.id = 'name'
registerForm.append(registerFormNameInput)

var registerFormEmailLabel = document.createElement('label')
registerFormEmailLabel.htmlFor = 'email'
registerFormEmailLabel.innerText = 'Correo electrónico'
registerForm.append(registerFormEmailLabel)

var registerFormEmailInput = document.createElement('input')
registerFormEmailInput.type = 'email'
registerFormEmailInput.id = 'email'
registerForm.append(registerFormEmailInput)

var registerFormUsernameLabel = document.createElement('label')
registerFormUsernameLabel.htmlFor = 'username'
registerFormUsernameLabel.innerText = 'Usuario'
registerForm.append(registerFormUsernameLabel)

var registerFormUsernameInput = document.createElement('input')
registerFormUsernameInput.type = 'text'
registerFormUsernameInput.id = 'username'
registerForm.append(registerFormUsernameInput)

var registerFormPasswordLabel = document.createElement('label')
registerFormPasswordLabel.htmlFor = 'password'
registerFormPasswordLabel.innerText = 'Contraseña'
registerForm.append(registerFormPasswordLabel)

var registerFormPasswordInput = document.createElement('input')
registerFormPasswordInput.type = 'password'
registerFormPasswordInput.id = 'password'
registerForm.append(registerFormPasswordInput)

var registerFormSubmitButton = document.createElement('button')
registerFormSubmitButton.type = 'submit'
registerFormSubmitButton.innerText = 'Registrar'
registerForm.append(registerFormSubmitButton)


var registerErrorPanel = document.createElement('p')
registerView.append(registerErrorPanel)


registerView.append(registerForm)

var registerLoginLinkMessage = document.createElement('p')
registerView.append(registerLoginLinkMessage)

var registerLoginLinkMessagePart1 = new Text('¿Ya estás registrado? ')
registerLoginLinkMessage.append(registerLoginLinkMessagePart1)

var registerLoginLink = document.createElement('a')
registerLoginLink.href = ''
registerLoginLink.innerText = 'Inicia sesión'
registerLoginLinkMessage.append(registerLoginLink)

registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()

    body.removeChild(registerView)
    body.append(loginView)
})

var registerLoginLinkMessagePart2 = new Text('.')
registerLoginLinkMessage.append(registerLoginLinkMessagePart2)

registerView.append(registerLoginLinkMessage)


// login view

var loginView = document.createElement('main')

var loginTitle = document.createElement('h2')
loginTitle.innerText = 'Iniciar sesión'
loginView.append(loginTitle)

var loginForm = document.createElement('form')
loginView.append(loginForm)

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var username = loginFormUsernameInput.value
    var password = loginFormPasswordInput.value

    try {
        var user = loginUser(username, password)

        loginForm.reset()
        loginErrorPanel.innerText = ''

        body.removeChild(loginView)
        body.append(homeView)

        var name = getUserName()

        homeUser.innerText = 'Bienvenido, ' + name
    } catch (error) {
        loginErrorPanel.innerText = error.message

        console.error(error)
    }
})

var loginFormUsernameLabel = document.createElement('label')
loginFormUsernameLabel.htmlFor = 'username'
loginFormUsernameLabel.innerText = 'Usuario'
loginForm.append(loginFormUsernameLabel)

var loginFormUsernameInput = document.createElement('input')
loginFormUsernameInput.type = 'text'
loginFormUsernameInput.id = 'username'
loginForm.append(loginFormUsernameInput)

var loginFormPasswordLabel = document.createElement('label')
loginFormPasswordLabel.htmlFor = 'password'
loginFormPasswordLabel.innerText = 'Contraseña'
loginForm.append(loginFormPasswordLabel)

var loginFormPasswordInput = document.createElement('input')
loginFormPasswordInput.type = 'password'
loginFormPasswordInput.id = 'password'
loginForm.append(loginFormPasswordInput)

var loginFormSubmitButton = document.createElement('button')
loginFormSubmitButton.type = 'submit'
loginFormSubmitButton.innerText = 'Iniciar sesión'
loginForm.append(loginFormSubmitButton)


var loginErrorPanel = document.createElement('p')
loginView.append(loginErrorPanel)


loginView.append(loginForm)

var loginRegisterLinkMessage = document.createElement('p')
registerView.append(loginRegisterLinkMessage)

var loginRegisterLinkMessagePart1 = new Text('¿No estás registrado? ')
loginRegisterLinkMessage.append(loginRegisterLinkMessagePart1)

var loginRegisterLink = document.createElement('a')
loginRegisterLink.href = ''
loginRegisterLink.innerText = 'Regístrate ahora'

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    body.removeChild(loginView)
    body.append(registerView)
})
loginRegisterLinkMessage.append(loginRegisterLink)


var loginRegisterLinkMessagePart2 = new Text('.')
loginRegisterLinkMessage.append(loginRegisterLinkMessagePart2)

loginView.append(loginRegisterLinkMessage)


// Home view

var homeView = document.createElement('main')

if (isUserLoggedIn())
    body.appendChild(homeView)


var homeUser = document.createElement('h2')

if (isUserLoggedIn()) {
    var name = getUserName()


    homeUser.innerText = 'Bienvenido, ' + name
} else
    homeUser.innerText = 'Bienvenido,  Usuario'

homeView.append(homeUser)

if (isUserLoggedIn())
    body.appendChild(homeView)

var homeLogoutButton = document.createElement('button')
homeLogoutButton.type = 'submit'
homeLogoutButton.innerText = 'Salir'
homeView.append(homeLogoutButton)

homeLogoutButton.addEventListener('click', function (event) {
    event.preventDefault()

    logoutUser()

    body.removeChild(homeView)
    body.append(loginView)
}) */