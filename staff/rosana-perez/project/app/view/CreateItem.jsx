import { errors } from 'com'
import { Button } from '../components/button'
import { Input } from '../components/input'
import { Textarea } from '../components/textarea'

const { ValidationError, SystemError, NotFoundError } = errors

import createItem from '../logic/createItem'

function CreateItem(props) {
    console.log('CreateItem rendering')

    return <main className="text-center w-full pt-[100px]">

        <h2 className="font-bold text-emerald-700" >Create Item</h2>

        <form className="p-4 text-left" onSubmit={event => {
            event.preventDefault()

            const form = event.target

            const location = form.location.value
            const image = form.image.value
            const text = form.text.value
            const description = form.description.value

            try {
                createItem(location, image, text, description)
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
            <Input type="text" id="location" />

            <label htmlFor="image" name="image">Image</label>
            <Input type="url" id="image" />

            <label htmlFor="text" name="text">Text</label>
            <Input type="text" id="text" />

            <label htmlFor="description" name="description">Description</label>
            <Textarea maxLength="140" type="text" id="description" placeholder="Write a description of your item"></Textarea>

            <Button className="my-6 text-xs" type="submit">Confirm create!</Button>

        </form>

        <Button type="button" onClick={() => props.onCancelClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
        </Button>

    </main >
}

export default CreateItem