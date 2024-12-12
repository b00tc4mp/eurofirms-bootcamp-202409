import { errors } from 'com'
import { Button } from '../components/button'
import { Input } from '../components/input'
import { Textarea } from '../components/textarea'
import { Field, FieldGroup, Fieldset, Label } from '../components/fieldset'
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'


const { ValidationError, SystemError, NotFoundError } = errors

import createItem from '../logic/createItem'

function CreateItem(props) {
    console.log('CreateItem rendering')

    return <main className="text-center h-full w-full justify-items-center p-6 py-8">
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
            <Fieldset>
                <FieldGroup>

                    <Field>
                        <Label htmlFor="location" name="location">Location</Label>
                        <Input type="text" id="location" />
                    </Field>

                    <Field>
                        <Label htmlFor="image" name="image">Image</Label>
                        <Input type="url" id="image" />
                    </Field>

                    <Field>
                        <Label htmlFor="text" name="text">Text</Label>
                        <Input type="text" id="text" />
                    </Field>

                    <Field>
                        <Label htmlFor="description" name="description">Description</Label>
                        <Textarea maxLength="140" type="text" id="description" placeholder="Write a description of your item"></Textarea>
                    </Field>

                </FieldGroup>
            </Fieldset>

            <Button color="emerald" className="my-6 text-xs" type="submit">Create</Button>

            <Button plain onClick={() => props.onCancelClick()}>
                <ArrowUturnLeftIcon />
            </Button>

        </form>
    </main >
}

export default CreateItem