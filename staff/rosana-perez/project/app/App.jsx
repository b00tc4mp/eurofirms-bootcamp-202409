import { useState } from 'react'

import Welcome from './view/Welcome'
import Login from './view/Login'
import Register from './view/Register'
import Home from './view/Home'
import CreateItem from './view/CreateItem'
import FavItems from './view/FavItems'
import Chats from './view/Chats'
import UserProfile from './view/UserProfile'

import isUserLoggedIn from './logic/isUserLoggedIn'

function App() {
    console.log('App rendering')

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

            onCancelClick={() => setView('welcome')}
        />}

        {view === 'login' && <Login
            onRegisterClick={() => setView('register')}

            onLoginSuccess={() => setView('home')}

            onCancelClick={() => setView('welcome')}
        />}

        {view === 'home' && <Home
            onCreateItem={() => setView('create')}

            onFavItems={() => setView('favItems')}

            onUserProfile={() => setView('userProfile')}

            onChats={() => setView('chats')}

            onLogout={() => setView('welcome')}
        />}

        {view === 'create' && <CreateItem
            onCreated={() => setView('home')}

            onCancelClick={() => setView('home')}
        />}

        {view === 'favItems' && <FavItems
            onCancelClick={() => setView('home')}
        />}

        {view === 'userProfile' && <UserProfile
            onCancelClick={() => setView('home')}
            onEditUserData={() => setView('home')}
        />}

        {view === 'chats' && <Chats
            onCancelClick={() => setView('home')}
        />}
    </>
}

export default App