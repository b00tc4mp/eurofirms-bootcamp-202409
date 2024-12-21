import { useState } from "react"

import Welcome from "./view/Welcome"
import Login from "./view/Login"
import Register from "./view/Register"
import Home from "./view/Home"

function App() {
    console.log('App -> render')

    const [view, setView] = useState('welcome')

    console.log('App -> state: view = ' + view)

    return <>
        <h1 className="text-2xl">ParkSpot</h1>

        {view === 'welcome' && <Welcome
            onRegisterClick={function () {
                setView('register')
            }}

            onLoginClick={function () {
                setView('login')
            }}
        />}

        {view === 'register' && <Register
            onLoginClick={function () {
                setView('login')
            }}

            onRegisterSuccess={function () {
                setView('login')
            }}
        />}

        {view === 'login' && <Login
            onRegisterClick={function () {
                setView('register')
            }}

            onLoginSuccess={function () {
                setView('home')
            }}
        />}

        {view === 'home' && <Home
            onLogout={function () {
                setView('login')
            }}
        />}
    </>
}

export default App