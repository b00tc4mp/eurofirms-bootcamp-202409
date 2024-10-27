var title = React.createElement('h1', null, 'App')

var welcomeTitle = React.createElement('h2', null, 'Welcome!')

var welcomeIntroPart1 = React.createElement(React.Fragment, null, 'Please, ')


var welcomeIntro = React.createElement('p', null, welcomeIntroPart1)

var welcomeView = React.createElement('main', null, [welcomeTitle, welcomeIntro])


var rootElement = document.querySelector('#root')
var root = ReactDOM.createRoot(rootElement)

root.render([title, welcomeView])


// Estructura de WELCOME VIEW

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

