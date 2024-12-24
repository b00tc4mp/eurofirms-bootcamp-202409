import { errors } from "com"
import registerPlace from "../../logic/registerPlace.js"

const { ValidationError, SystemError, NotFoundError, OwnerShipError } = errors

function RegisterPlace(props) {
    console.log('RegisterPlace -> render')

    const place = props.place

    const handleRegisterPlaceSubmit = event => {
        event.preventDefault()

        var form = event.target

        var parking = form.parking.value
        var level = form.level.value
        var space = form.space.value

        try {
            registerPlace(parking, level, space)
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

    return <article>
        <div>
            <h2 className='text-xl text-center text-red-500'>Crear plaza</h2>
        </div>

        <form className="flex flex-col gap-2" onSubmit={handleRegisterPlaceSubmit}>
            <select name="parking">
                { }


            </select>

            <label htmlFor="level">Nivel (Planta)</label>
            <input placeholder="Escribe el piso donde has aparcado" type="text" id="level" />

            <label htmlFor="space">Plaza</label>
            <input placeholder="Escribe la plaza donde has aparcado" type="text" id="space" />

            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-5" type="submit">Crear</button>
        </form>

    </article>
}

export default RegisterPlace