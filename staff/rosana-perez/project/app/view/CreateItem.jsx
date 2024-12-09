import { errors } from 'com'

const { ValidationError, SystemError, NotFoundError } = errors

import createItem from '../logic/createItem'

function CreateItem(props) {
    console.log('CreateItem rendering')

    return <main>
        <h2>Create Item</h2>

        <form onSubmit={event => {
            event.preventDefault()

            const form = event.target

            const location = form.location.value
            const image = form.image.value
            const text = form.text.value

            try {
                createItem(location, image, text)
                    .then(() => props.onCreated()
                        .catch(error => {
                            if (error instanceof NotFoundError)
                                alert(error.message)
                            else if (error instanceof SystemError)
                                alert('Sorry, there was a problem. Try again later.')

                            console.error(error)
                        }))
            } catch (error) {
                if (error instanceof ValidationError)
                    res.status(400).json({ error: error.constructor.name, message: error.message })
                else
                    res.status(500).json({ error: SystemError.name, message: error.message })

                console.error(error)
            }
        }}>
            <label htmlFor="location" name="location">Location</label>
            <input type="text" id="location" />

            <label htmlFor="image" name="image">Image</label>
            <input type="url" id="image" />

            <label htmlFor="text" name="text">Text</label>
            <input type="text" id="text" />

            <button type="submit">Create</button>

        </form>
        <button type="button" name="cancel button" onClick={event => {
            event.preventDefault()

            props.onCancelClick()
        }}>Cancel</button>

    </main>
}

export default CreateItem