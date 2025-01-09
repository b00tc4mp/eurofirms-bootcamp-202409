import { useState } from "react"

import Welcome from "./view/Welcome"
import Login from "./view/Login"
import Register from "./view/Register"
import Home from "./view/Home"
import RegisterPlace from "./view/RegisterPlace"

function App() {
    console.log('App -> render')

    const [view, setView] = useState('welcome')

    console.log('App -> state: view = ' + view)
    //TODO mejorar metodos de navegacion
    const handleRegisterClick = () => setView('register')
    const handleLoginClick = () => setView('login')
    const handleRegisterSuccess = () => setView('login')
    const handleLoginSuccess = () => setView('home')
    const handleLogout = () => setView('login')
    const handleRegisterPlaceClick = () => setView('registerPlace')
    const handleCreatePlaceSuccess = () => setView('home')
    const handleDeletePlaceClick = () => setView('home')
    const handleBackHomeClick = () => setView('home')

    return <>
        <h1 className="text-2xl">ParkSpot</h1>

        {view === 'welcome' && <Welcome
            onRegisterClick={handleRegisterClick}
            onLoginClick={handleLoginClick}
        />}

        {view === 'register' && <Register
            onLoginClick={handleLoginClick}
            onRegisterSuccess={handleRegisterSuccess}
        />}

        {view === 'login' && <Login
            onRegisterClick={handleRegisterClick}

            onLoginSuccess={handleLoginSuccess}
        />}

        {view === 'home' && <Home
            onLogout={handleLogout}
            onRegisterPlaceClick={handleRegisterPlaceClick}
        />}

        {view === 'registerPlace' && <RegisterPlace
            onRegisterPlaceSuccess={handleCreatePlaceSuccess}
            onBackHomeClick={handleBackHomeClick}
        />}

        {view === 'place' && <Place
            onDeletePlaceClick={handleDeletePlaceClick}
        />}
    </>
}

export default App