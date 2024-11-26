// datos
var users = []
// Se esta creando un espacio para guardar los usuarios registrados en la app,

users[0] = { name: 'Ji Rafa', email: 'ji@rafa.com', username: 'jirafa', password: '123123123' }
users[1] = { name: 'Ele Fante', email: 'ele@fante.com', username: 'elefante', password: '123123123' }
users[2] = { name: 'Coco Drilo', email: 'coco@drilo.com', username: 'cocodrilo', password: '123123123' }
users[3] = { name: 'Jarra y Pedal', email: 'Huete@aliarla.com', username: 'Samuel.S', password: 'HueteCu' }

// business(logica)

function authenticateUser(username, password) {
    var user = users.find(function (user) {
        return user.username === username && user.password === password
    })

    if (user === undefined) throw new Error('wrong credentials')

    return user
}

function registerUser(name, email, user, password) {
    var user = users.find(function (user) {
        return user.email === email && user.username === username
        // Esto es un ejemplo de manejo de datos y reglas
    })
    if (user !=== undefined) throw new Error('wrong credentials')
    var user = {}
    // Se esta creando un objeto`user'que esta vacio ( relaccionado con var = user (linea 66,(mi base de datos)))
    //Guardamos las propiedades de name,email,username y password.
    user.name = name
    user.email = email
    user.username = username
    user.password = password

    users.push(user)
    // Con este metodo se pone el objeto dentro del array
}

// presentacion

var sections = document.querySelectorAll('section')
// querySelectorAll ( llama a todas las secciones, las 4 de abajo). Te lo devuelve en un objeto iterable.
var welcomeSection = sections[0]
var registerSection = sections[1]
var loginSection = sections[2]
var homeSection = sections[3]

// crear variables para cada seccion para acceder a las secciones a traves de var.

registerSection.style.display = 'none'
loginSection.style.display = 'none'
homeSection.style.display = 'none'
// para que esta seccion no se muestre cuando arranca la aplicacion. Los 3 apagados, pero welcome no.

var welcomeLinks = welcomeSection.querySelectorAll('a')
var welcomeRegisterLink = welcomeLinks[0]
var welcomeLoginLink = welcomeLinks[1]

welcomeRegisterLink.addEventListener('click', function (event) {
    // Para mecanizar el comportamiento de click, se ejecuta cuando se hace click en este link
    event.preventDefault()
    // para que el click no haga el comportamiento por defecto y lo manejemos con js

    welcomeSection.style.display = 'none'
    registerSection.style.display = ''
    // Se apaga la seccion welcome y se enciende la de registro.
})

welcomeLoginLink.addEventListener('click', function (event) {
    event.preventDefault()
    welcomeSection.style.display = 'none'
    loginSection.style.display = ''
    // Se apaga la seccion welcome y se enciende la de login.
})

var registerLinks = registerSection.querySelectorAll('a')
var registerLoginLink = registerLinks[0]

registerLoginLink.addEventListener('click', function (event) {
    event.preventDefault()
    registerSection.style.display = 'none'
    loginSection.style.display = ''
    // Se apaga la seccion register y se enciende login
})

var loginLinks = loginSection.querySelectorAll('a')
var loginRegisterLink = loginLinks[0]

loginRegisterLink.addEventListener('click', function (event) {
    event.preventDefault()

    loginSection.style.display = 'none'
    registerSection.style.display = ''
    // Se apaga Login y se enciende registro
})

var registerForm = registerSection.querySelector('form')

registerForm.addEventListener('submit', function (event) {
    event.preventDefault()
    //console.log('register submit')

    var registerFormInputs = registerForm.querySelectorAll('input')

    var registerFormNameInput = registerFormInputs[0]
    // Estoy referenciando el primer Input
    var registerFormEmailInput = registerFormInputs[1]
    var registerFormUsernameInput = registerFormInputs[2]
    var registerFormPasswordInput = registerFormInputs[3]

    var name = registerFormNameInput.value
    // Con la propiedad ,value, del Input nos muestra lo que esta escrito dentro( en este caso seria para name)
    var email = registerFormEmailInput.value
    var username = registerFormUsernameInput.value
    var password = registerFormPasswordInput.value

    // console.log (name,email,username,password) para ver si recoge los datos del usuario corectamente( es solo comprobante luego lo eliminamos)


    var feedback = registerSection.querySelector('p')





    registerForm.reset()
    //Para limpiar el formulario
    feedback.innerText = ''

    registerSection.style.display = 'none'
    loginSection.style.display = ''
    // Una vez registrado,interesa que register se inactive y aparezca login

})

var loginForm = loginSection.querySelector('form')
// Se estan realizando los mismos pasos que con var registerForm 

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    var loginFormInputs = loginForm.querySelectorAll('input')

    var loginFormUsernameInput = loginFormInputs[0]
    var loginFormPasswordInput = loginFormInputs[1]

    var username = loginFormUsernameInput.value
    var password = loginFormPasswordInput.value

    var feedback = loginSection.querySelector('p') // comentario Error ...

    var user = users.find(function (user) {
        return user.username === username && user.password === password
    })

    try {
        var user = authenticateUser(username, password)
        loginSection.style.display = 'none'
        homeSection.style.display = ''

        // Si todo va bien en Login ,hay que volverlo a dejar el blanco y que no aparezca usuario y contraseña.
        loginForm.reset()
        feedback.innerText = ''
        var userTitle = homeSection.querySelector('h3')
        userTitle.innerText = 'Hello,' + user.name + '!'
    } catch (error) {
        feedback.innerText = error.message
        console.error(error)
    }



})
// Vamos a mecanizar el botton de Logout
var logoutButton = homeSection.querySelector('button')
logoutButton.addEventListener('click', function (event) {
    event.preventDefault() // se puede obviar pq no va a navegar a ningun sitio

    // Al hacer Logout se apaga Home y se encienda Login

    homeSection.style.display = 'none'
    loginSection.style.display = ''
})
