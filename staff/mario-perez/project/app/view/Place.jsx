import { errors } from 'com'

const { ValidationError, SystemError, NotFoundError, OwnershipError } = errors

// import deletePlace from

function Place(props) {
    console.log('Place -> render')

    const place = props.place

    // TODO logic of deletePlaceClick

    return <article>
        <div className="mt-5 mb-5 text-center" >
            <h2 className="text-4xl">Tu coche</h2>
        </div>

        <div className="text-center text-2xl">
            <h3>{place.parking.name}</h3>
            <h4>Nivel: {place.level}</h4>

            <div className="w-12 bg-blue-900 text-center rounded-xl">
                <p className="text-white">{place.space}</p>
            </div>

        </div>

    </article>
}

export default Place