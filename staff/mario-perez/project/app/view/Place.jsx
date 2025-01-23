import { errors, utils } from 'com'

const { ValidationError, SystemError, NotFoundError, OwnershipError } = errors

import deletePlace from '../logic/deletePlace.js'
// import formatDate from '../../com/utils.js'
import { useEffect, useState } from 'react'

import EditPlace from './EditPlace.jsx'
import getUserPlaces from '../logic/getUserPlaces.js'

function Place(props) {
    console.log('Place -> render')
    console.log(props)

    const [status, setStatus] = useState('read')

    const place = props.place
    console.log(place)
    const { date: formattedDate, time: formattedTime } = utils.formatDate(place.checkout)

    const handleDeletePlaceClick = () => {
        try {
            deletePlace(place.id)
                .then(() => props.onPlaceDeleted())

            // props.updatePlace()
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }

    const handleEditPlaceClick = () => {
        setStatus('edit')
    }

    const handleEditPlaceSuccess = () => {
        setStatus('read')
        props.onPlaceEdited()
    }


    return (
        <article>
            {
                status === 'read' && <> <h1>Status = read</h1>
                    <div className="mt-5 mb-5 text-center" >
                        <h2 className="text-4xl">Tu coche con matrícula {place.vehicleRegistration}</h2>
                    </div>

                    <div className="text-center text-2xl">
                        <h3>{place.parking.name}</h3>
                        <h4>Nivel: {place.level}</h4>
                    </div>

                    <div className="bg-blue-900 text-center rounded-xl">
                        <p className="text-white">{place.space}</p>
                    </div>

                    <div className="text-center text-2xl">
                        <h4>Finaliza el : {formattedDate} a las {formattedTime}</h4>
                    </div>

                    <div className="text-center text-2xl">
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5" name='' onClick={handleEditPlaceClick}>Editar plaza</button>

                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5" onClick={handleDeletePlaceClick}>Quitar plaza</button>
                    </div>
                </>
            }

            {
                status === 'edit' && <><h1>Status  =  edit</h1>
                    <EditPlace place={place} backToView={() => setStatus('read')} onEditPlaceSuccess={handleEditPlaceSuccess} />
                </>
            }


        </article>
    )
}

export default Place