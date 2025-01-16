import { errors } from 'com'
import { useState, useEffect } from 'react'
import getParkings from "../logic/getParkings.js"
import editPlace from '../logic/editPlace.js'
import getOnePlace from '../logic/getOnePlace.js'

const { NotFoundError, SystemError, ValidationError } = errors

function EditPlace(props) {
    console.log('EditPlace -> render')

    const place = props.place
    const [parkings, setParkings] = useState([])
    const [levels, setLevels] = useState([])
    const [date, setDate] = useState([])
    const [status, setStatus] = useState('edit')

    useEffect(() => {
        handleGetParking()
    }, [])

    useEffect(() => {
        if (parkings.length > 0) {
            const selectedParking = parkings.find(parking => parking.id === place.parking.id)
            const levels = Array.from({ length: selectedParking.levels }, (_, i) => i + 1)
            setLevels(levels)
        }
    }, [parkings])


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


    const handleSetTime = event => {
        setDate(event.target.value)
    }

    const handleBackHomeClick = () => {
        props.backToView()
    }

    const handleEditPlaceSubmit = event => {
        event.preventDefault()

        const form = event.target

        const parking = form.parking.value
        const level = Number(form.level.value)
        const space = form.space.value
        const checkin = form.checkin.value
        const checkout = form.checkout.value
        const vehicleRegistration = form.vehicleRegistration.value
    }

    return <article>
        <form className="flex flex-col gap-2" onSubmit={handleEditPlaceSubmit}>
            <select id="parkings" name="parking" value={place?.parking.id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleParkingChange}>
                {/* <option defaultValue={place.parking.id}>Elige un parking</option> */}
                {parkings?.map(parking => (
                    <option key={parking.id} value={parking.id}>{parking.name}</option>
                ))}
            </select>

            <select id="level" name="level" value={place?.level} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {/* <option defaultValue={place.level}>Elige un nivel</option> */}
                {levels?.map(level => (
                    <option key={level} value={level}>{level}</option>
                ))}
            </select>

            <label htmlFor="space">Plaza</label>
            <input defaultValue={place.space} type="text" id="space" />

            <label htmlFor="checkin">Hora de entrada</label>
            <input type="datetime-local" id="checkin" defaultValue={place.checkin} onChange={handleSetTime} step="60" />

            <label htmlFor="checkout">Hora de salida</label>
            <input type="datetime-local" id="checkout" defaultValue={place.checkout} onChange={handleSetTime} step="60" />

            <label htmlFor="vehicleRegistration">Matrícula</label>
            <input defaultValue={place.vehicleRegistration} type="text" id="vehicleRegistration" />


            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5" type="submit">Actualizar</button>
        </form>

        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5" onClick={handleBackHomeClick}>Volver</button>
    </article>

}

export default EditPlace