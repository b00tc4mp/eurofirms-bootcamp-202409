import { useState } from 'react'

import Welcome from './view/Welcome'
import Login from './view/Login'
import Register from './view/Register'
import Home from './view/Home'
import CreateItem from './view/CreateItem'

import isUserLoggedIn from './logic/isUserLoggedIn'

function App() {
    console.log('App rendering')

    const [view, setView] = useState(isUserLoggedIn() ? 'home' : 'welcome')

    console.log('App -> state: view = ' + view)

    return <>

        <header>
            <p class="p-6 font-medium text-2xl">Dona2</p>
        </header>

        {view === 'welcome' && <Welcome
            onRegisterClick={() => setView('register')}

            onLoginClick={() => setView('login')}
        />}

        {view === 'register' && <Register
            onLoginClick={() => setView('login')}

            onRegisterSuccess={() => setView('login')}

            onCancelClick={() => setView('welcome')}
        />}

        {view === 'login' && <Login
            onRegisterClick={() => setView('register')}

            onLoginSuccess={() => setView('home')}

            onCancelClick={() => setView('welcome')}
        />}

        {view === 'home' && <Home
            onLogout={() => setView('welcome')}

            onCreateItem={() => setView('create')}
        />}

        {view === 'create' && <CreateItem
            onCreated={() => setView('home')}

            onCancelClick={() => setView('home')}
        />}



    </>
}

export default App