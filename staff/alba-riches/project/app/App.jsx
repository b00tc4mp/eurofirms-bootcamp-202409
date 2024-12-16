import { useState } from 'react'

import Welcome from './view/Welcome'
import Login from './view/Login'
import Register from './view/Register'
import Home from './view/Home'
import CreateProduct from './view/CreateProduct'

import isUserLoggedIn from './logic/isUserLoggedIn'

function App() {
    console.log('App -> render')

    const [view, setView] = useState(isUserLoggedIn() ? 'home' : 'welcome')

    console.log('App -> state: view = ' + view)
    return <>
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

            onCreateProduct={() => setView('create-product')}
        />}

        {view === 'create-product' && <CreateProduct
            onCreated={() => setView('home')}
        />}
    </>
}

export default App