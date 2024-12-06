import { useState } from 'react'

import Welcome from './app/view/Welcome'
import Login from './app/view/Login'
import Register from './app/view/Register'
import Home from './app/view/Home'
import CreatePost from './app/view/CreatePost'

import isUserLoggedIn from './app/logic/isUserLoggedIn'

function App() {
    console.log('App -> render')

    // const viewState = useState(isUserLoggedIn() ? 'home' : 'welcome')
    // const view = viewState[0]
    // const setView = viewState[1]
    const [view, setView] = useState(isUserLoggedIn() ? 'home' : 'welcome')

    console.log('App -> state: view = ' + view)

    return <>
        <h1>App</h1>

        {view === 'welcome' && <Welcome
            onRegisterClick={() => setView('register')}

            onLoginClick={() => setView('login')}
        />}

        {view === 'register' && <Register
            onLoginClick={() => setView('login')}

            onRegisterSuccess={() => setView('login')}
        />}

        {view === 'login' && <Login
            onRegisterClick={() => setView('register')}

            onLoginSuccess={() => setView('home')}
        />}

        {view === 'home' && <Home
            onLogout={() => setView('login')}

            onCreatePost={() => setView('create-post')}
        />}

        {view === 'create-post' && <CreatePost
            onCreated={() => setView('home')}
        />}
    </>
}

export default App