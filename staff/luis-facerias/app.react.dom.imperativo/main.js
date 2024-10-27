// Esta prueba de react DOM, no va a avanzar más en la codificación.
// Sólo es una muestra de esta opción

var title = React.createElement('h1', null, 'App')

var welcomeTitle = React.createElement('h2', null, 'Welcome!')

var welcomeIntroPart1 = React.createElement(React.Fragment, null, 'Please, ')
var welcomeRegisterLink = React.createElement('a', { href: ''}, 'Register')
var welcomeIntroPart3 = React.createElement(React.Fragment, null, ' or ')
var welcomeLoginLink = React.createElement('a', { href: '' }, 'Login')
var welcomeIntroPart5 = React.createElement(React.Fragment, null, '.')
//
var welcomeIntro = React.createElement('p', null, [welcomeIntroPart1, welcomeRegisterLink, welcomeIntroPart3, welcomeLoginLink, welcomeIntroPart5])

var welcomeView = React.createElement('main', null, [welcomeTitle, welcomeIntro])

var rootElement = document.querySelector('#root')
var root = ReactDOM.createRoot(rootElement)

root.render([title, welcomeView])
