var title = React.createElement('h1', null, 'App')

var welcomeTitle = React.createElement('h2', null, 'welcome')

var welcomeTitlePart1 = React.createElement(React.Fragment, null, 'Please, ')
var WelcomeRegisterLink = React.createElement('a', { href: ''}, 'Register')
var welcomeIntroPart3 = React.createElement(React.Fragment, null, ' or ')
var welcomeLoginLink = React.createElement('a', { href: '' }, 'Login')
var welcomeIntroPart5 = React.createElement(React.Fragment, null, '.')

var elcomeIntro = React.createElement('P', null, [welcomeIntroPart1, welcomeregisterLink, welcomeIntroPart3, welcomeLoginLink, welcomeIntroPart5])

var welcomeIntro = React.createElement('main', null, [welcomeTitle, welcomeIntro])

var rootElement = document.querySelector('#root')
var root = ReactDOM.createRoot(rootElement)

root,render([title, welcomeView])