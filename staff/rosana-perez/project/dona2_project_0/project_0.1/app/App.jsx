import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import Welcome from './view/Welcome.js'
import Login from './view/Login.js'
import Register from './view/Register.js'
import Home from './view/Home.js'
import ItemsAsGuest from './view/ItemsAsGuest.js'

import logic from './logic/index.js'

function App() {
    console.log('App rendering')

    const [userLoggedIn, setUserLoggedIn] = useState(logic.isUserLoggedIn())

    const handleLoggedIn = () => {
        setUserLoggedIn(logic.isUserLoggedIn())
    }


    return (
        <BrowserRouter>
            <>
                <div className="App">
                    <Routes>
                        <Route path="/welcome" element={!userLoggedIn ? <Welcome /> : <Navigate to='/' />} />
                        <Route path="/itemsAsGuest" element={<ItemsAsGuest />} />
                        <Route path="/login" element={!userLoggedIn ? <Login onLoggedIn={handleLoggedIn} /> : <Navigate to='/' />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/*" element={userLoggedIn ? <Home /> : <Navigate to="/welcome" />} />
                    </Routes>
                </div>
            </>
        </BrowserRouter>
    )
}

export default App