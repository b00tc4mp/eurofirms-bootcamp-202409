// Cramos la estructura de presentación

var body = document.querySelector('body')

var title = document.createElement('h1')        // Creamos etiqueta h1
title.innerText('App.imperativa')               // Se le asinga un texto
body.appendChild(title)                         // h1 añadida a body


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

var welcomeView = document.createElement('main')

var welcomeTitle = document.createElement('h2')
welcomeTitle.innerTitle = 'Welcome'
welcomeView.appendChild(welcomeTitle)


body.appendChild(welcomeTitle)