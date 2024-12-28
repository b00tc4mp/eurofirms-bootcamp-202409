import { errors } from "com"
import registerPlace from "../logic/registerPlace.js"
import getParkings from "../logic/getParkings.js"

import { useState, useEffect } from 'react'

const { ValidationError, SystemError, NotFoundError, OwnerShipError, DuplicityError } = errors

function RegisterPlace(props) {
    console.log('RegisterPlace -> render')

    const place = props.place
    const [parkings, setParkings] = useState([])
    const [levels, setLevels] = useState([])

    useEffect(() => {
        handleGetParking()
    }, [])

    const handleRegisterPlaceSubmit = event => {
        event.preventDefault()

        const form = event.target

        const parking = form.parking.value
        const level = Number(form.level.value)
        const space = form.space.value
        const checkin = form.checkin.value
        const checkout = form.checkout.value

        try {
            registerPlace(parking, level, space, checkin, checkout)
                .then(() => props.onRegisterSuccess())
                .catch(error => {
                    if (error instanceof DuplicityError)
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

    const handleGetParking = () => {
        try {
            getParkings()
                .then((parkings) => setParkings(parkings))
                .catch(error => {
                   /* if (error instanceof DuplicityError)
                    alert (error.message) 
                    else */ if (error instanceof SystemError)
                        alert('Hubo un problema')
                })


        } catch (error) {
            if (error instanceof ValidationError) {
                alert(error.message)
            } else {
                alert('Hubo un problema')
            }
        }
    }

    const handleParkingChange = event => {
        const selectedParking = parkings.find(parking => parking.id === event.target.value)
        console.log('Parking seleccionado: ', selectedParking)
        if (selectedParking) {
            const levels = Array.from({ length: selectedParking.levels }, (_, i) => i + 1)
            console.log('Niveles seleccionados: ', levels)
            setLevels(levels)
        } else {
            setLevels([])
        }

    }

    return <article>
        <div>
            <h2 className='text-xl text-center text-red-500'>Aparcar en una plaza</h2>
        </div>

        <form className="flex flex-col gap-2" onSubmit={handleRegisterPlaceSubmit}>
            <select id="parkings" name="parking" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleParkingChange}>
                <option value="">Elige un parking</option>
                {parkings.map(parking => (
                    <option key={parking.id} value={parking.id}>{parking.name}</option>
                ))}
            </select>

            <select id="level" name="level" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="">Elige un nivel</option>
                {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                ))}
            </select>

            <label htmlFor="space">Plaza</label>
            <input placeholder="Escribe la plaza donde has aparcado" type="text" id="space" />

            <label htmlFor="checkin">Hora de entrada</label>
            <input placeholder="Escribe cuándo entras" type="datetime-local" id="checkin" />

            <label htmlFor="checkout">Hora de salida</label>
            <input placeholder="Escribe cuándo sales " type="datetime-local" id="checkout" />



            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5" type="submit">Crear</button>
        </form>
    </article>
}

export default RegisterPlace