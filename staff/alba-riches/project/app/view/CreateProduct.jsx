import { errors } from 'com'

const { ValidationError, SystemError, NotFoundError } = errors

import createProduct from '../logic/createProduct'

function CreateProduct(props) {
    console.log('CreateProduct -> render')

    return <main>
        <h2>Create Product</h2>

        <form onSubmit={event => {
            event.preventDefault()

            const form = event.target

            const image = form.image.value
            const text = form.text.value

            try {
                createProduct(image, text)
                    .then(() => props.onCreated())
                    .catch(error => {
                        if (error instanceof NotFoundError)
                            alert(error.message)
                        else if (error instanceof SystemError)
                            alert('sorry, there was a problem. try again later.')

                        console.error(error)
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    res.status(400).json({ error: error.constructor.name, message: error.message })
                else
                    res.status(500).json({ error: SystemError.name, message: error.message })

                console.error(error)
            }
        }}>
            <label htmlFor="image">Image</label>
            <input type="url" id="image" />

            <label htmlFor="text">Text</label>
            <input type="text" id="text" />

            <button type="submit">Create</button>
        </form>
    </main>
}

export default CreateProduct
