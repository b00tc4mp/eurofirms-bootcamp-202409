import { errors } from 'com'

import { Button } from '../components/button'
import { Input } from '../components/input'
import { Textarea } from '../components/textarea'
import { Field, FieldGroup, Fieldset, Label } from '../components/fieldset'

import logic from '../logic/index.js'

import LocationListBox from '../components/LocationListBox.jsx'

import { useNavigate } from 'react-router-dom'

const { ValidationError, SystemError, NotFoundError } = errors

function CreateItem() {
    console.log('CreateItem rendering')

    const navigate = useNavigate()

    const handleError = error => {
        if (error instanceof NotFoundError) {
            alert(error.message)
        }
        else if (error instanceof ValidationError) {
            alert(error.message)
        }
        else if (error instanceof SystemError) {
            alert('Sorry, there was a problem. Try again later.')
        }
        else {
            alert('Sorry, there was a problem. Try again later.')
        }
        console.error(error)
    }


    const handleCreateItemSubmit = event => {
        event.preventDefault()

        const form = event.target

        const location = form.location.value
        const image = form.image.value
        const title = form.title.value
        const description = form.description.value
        const sold = false

        const newItemData = { location, image, title, description, sold }

        try {
            logic.createItem(location, image, title, description, sold)
                .then(() => navigate("/", { state: { newItemData } }))
                .catch(error => handleError(error))
        } catch (error) { handleError(error) }
    }

    return (
        <>
            <main className="flex flex-col w-full items-center justify-center">
                <div className="text-center w-full p-2 max-w-lg">
                    <h2 className=" font-semibold flex justify-center text-gray-600 border-2 border-emerald-500 p-2 rounded-lg">Create your item</h2>

                    <form className="my-10 text-left" onSubmit={handleCreateItemSubmit}>
                        <Fieldset>
                            <FieldGroup>
                                <Field>
                                    <div className="input-with-select w-full">
                                        <Field>
                                            <Label htmlFor="location" name="location">Location</Label>
                                            <LocationListBox />
                                        </Field>

                                    </div>
                                </Field>

                                <Field>
                                    <Label htmlFor="image" name="image">Image</Label>
                                    <Input className="text-xs" type="url" id="image" placeholder="Put the image link here" />
                                </Field>

                                <Field>
                                    <Label htmlFor="title" name="title">Title</Label>
                                    <Input className="text-xs" type="text" id="title" placeholder="Write a title here" />
                                </Field>

                                <Field>
                                    <Label htmlFor="description" name="description">Description</Label>
                                    <Textarea className="text-xs" maxLength="140" type="text" id="description" placeholder="Write a description of your item"></Textarea>
                                </Field>
                            </FieldGroup>
                        </Fieldset>

                        <Button color="emerald-500" className="my-6 text-xs text-emerald-800 font-bold" type="submit">Create</Button>
                    </form>
                </div>
            </main>
        </>
    )
}

export default CreateItem
