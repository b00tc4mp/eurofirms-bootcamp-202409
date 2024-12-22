import { useState } from 'react'

import Welcome from './view/Welcome'
import Login from './view/Login'
import Register from './view/Register'
import Home from './view/Home'
import CreatePost from './view/CreatePost'

import isUserLoggedIn from './logic/isUserLoggedIn'

function App() {
    console.log('App -> render')

    const [view, setView] = useState(isUserLoggedIn() ? 'home' : 'welcome')

    console.log('App -> state: view = ' + view)
    return <>
        {view === 'Welcome' && <Welcome
            onRegisterClick={() => setView('register')}

            onLogiClick={() => setView('login')}
        />}

        {view === 'register' && <Register
            onLoginClick={() => setView('login')}
            
            onRegisterSuccess={() => setView('login')}
        />}
             
        {view === 'login'&& <Login
            onRegisterClick={() => setView('register')}

            onLoginSuccess={() => setView('home')}
        />}

        {view === 'home' && <Home
            onLogout={() => setView('home')}
       
            onCreatePost={() => setView('create-post')}
        />}
    
        {view === 'create-post' && <CreatePost
            onCreated={() => setView('home')}
        />} 
     </>
}

export default App