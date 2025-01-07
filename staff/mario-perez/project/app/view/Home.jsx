import { errors } from 'com'

const { NotFoundError, SystemError, ValidationError } = errors

import { useState, useEffect } from 'react'

import logoutUser from '../logic/logoutUser.js'
import getUserName from '../logic/getUserName.js'
import getUserPlaces from '../logic/getUserPlaces.js'
import Place from './Place.jsx'
//import registerPlace from '../../api/logic/registerPlace.js'
import registerPlace from '../logic/registerPlace.js'

function Home(props) {
    console.log('HomeView -> render')

    /*
    props -> { onLogout }
    */

    const [name, setName] = useState(null)
    const [places, setPlaces] = useState([])



    console.log('HomeView -> state: name = ' + name)

    useEffect(() => {
        try {
            getUserName()
                .then(name => setName(name))
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Hubo un problema. Inténtalo más tarde.')

                    console.error(error)
                })

            getUserPlaces()
                .then(places => setPlaces(places))
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Hubo un problema. Inténtalo más tarde.')

                    console.error(error)
                })

        } catch (error) {
            if (error instanceof ValidationError)
                alert(error.message)
            else
                alert('Hubo un problema. Inténtalo más tarde.')

            console.error(error)
        }

    }, [])

    const handleLogoutClick = () => {
        try {
            logoutUser()

            props.onLogout()
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    const handleRegisterPlaceClick = () => {
        try {
            props.onRegisterPlaceClick()
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    const handleUpdatePlaceClick = () => {
        try {
            getUserPlaces()
                .then((places) => {
                    console.log(places)
                    setPlaces(places)
                })
                .catch(error => {
                    if (error instanceof NotFoundError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Hubo un problema. Inténtalo más tarde.')

                    console.error(error)
                })
        } catch (error) {
            if (error instanceof ValidationError)
                alert(error.message)
            else
                alert('Hubo un problema. Inténtalo más tarde.')

            console.error(error)
        }
    }

    return <main className='p-10'>
        <h2>Bienvenido, {name}</h2>
        {places.map(place => <Place key={place.id} place={place} updatePlace={handleUpdatePlaceClick}
        />)}
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5" onClick={handleRegisterPlaceClick}>Nueva plaza</button>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5" onClick={handleLogoutClick}>Cerrar sesión</button>
    </main>
}

export default Home