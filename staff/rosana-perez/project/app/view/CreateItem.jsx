import { errors } from 'com'

import LocationPicker from '../components/LocationPicker'
import { Button } from '../components/button'
import { Input } from '../components/input'
import { Textarea } from '../components/textarea'
import { Field, FieldGroup, Fieldset, Label } from '../components/fieldset'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'


const { ValidationError, SystemError, NotFoundError } = errors

import createItem from '../logic/createItem'

function CreateItem(props) {
    console.log('CreateItem rendering')

    return <main className="min-h-screen flex flex-col items-center justify-center">
        <Button plain onClick={() => props.onCancelClick()} className="justify-items-start">
            <ArrowUturnLeftIcon />
        </Button>
        <div className="text-center w-full max-w-lg p-6 py-8">
            <h2 className="font-bold text-emerald-700">Create Item</h2>

            <form className="text-left" onSubmit={event => {
                event.preventDefault()

                const form = event.target

                const location = form.location.value
                const image = form.image.value
                const title = form.title.value
                const description = form.description.value

                try {
                    createItem(location, image, title, description)
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
                <Fieldset>
                    <FieldGroup>

                        <Field>
                            <Label htmlFor="location" name="location">Location</Label>
                            <Input type="text" id="location" />
                            <LocationPicker />
                        </Field>

                        <Field>
                            <Label htmlFor="image" name="image">Image</Label>
                            <Input type="url" id="image" placeholder="Put the image link here" />
                        </Field>

                        <Field>
                            <Label htmlFor="title" name="title">Text</Label>
                            <Input type="text" id="text" />
                        </Field>

                        <Field>
                            <Label htmlFor="description" name="description">Description</Label>
                            <Textarea maxLength="140" type="text" id="description" placeholder="Write a description of your item"></Textarea>
                        </Field>

                    </FieldGroup>
                </Fieldset>

                <Button color="emerald" className="my-6 text-xs" type="submit">Create</Button>

            </form>
        </div>
    </main >
}

export default CreateItem