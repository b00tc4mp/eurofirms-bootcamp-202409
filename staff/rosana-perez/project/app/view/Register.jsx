import { errors } from 'com'

import { Button } from '../components/button'
import { Input } from '../components/input'
import { Text, TextLink } from '../components/text'
import { Field, FieldGroup, Fieldset, Label } from '../components/fieldset'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

const { DuplicityError, SystemError, ValidationError } = errors

import registerUser from '../logic/registerUser'

function Register(props) {
    console.log('Register rendering')

    return <main className="text-center h-full w-full justify-items-center p-6 py-8">

        <h2 className="font-bold text-emerald-700 ">Register</h2>

        <form className="p-4 text-left" onSubmit={event => {
            event.preventDefault()

            const form = event.target

            const name = form.name.value
            const location = form.location.value
            const email = form.email.value
            const username = form.username.value
            const password = form.password.value

            try {
                registerUser(name, location, email, username, password)
                    .then(() => props.onRegisterSuccess())
                    .catch(error => {
                        if (error instanceof DuplicityError)
                            alert(error.message)
                        else if (error instanceof SystemError)
                            alert('Sorry, there was a problem. Try again later.')

                        console.error(error)
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    alert(error.message)
                else
                    alert('Sorry, there was a problem. Try again later.')

                console.error(error)
            }
        }}>
            <Fieldset>
                <FieldGroup>
                    <Field>
                        <Label htmlFor="name" name="name">Name</Label>
                        <Input type="text" id="name" />
                    </Field>
                    <Field>
                        <Label htmlFor="location" name="location">Location</Label>
                        <Input type="text" id="location" />
                    </Field>
                    <Field>
                        <Label htmlFor="email" name="email">Email</Label>
                        <Input type="email" id="email" />
                    </Field>
                    <Field>
                        <Label htmlFor="username" name="username">Username</Label>
                        <Input type="text" id="username" />
                    </Field>
                    <Field>
                        <Label htmlFor="password" name="password">Password</Label>
                        <Input type="password" id="password" />
                    </Field>
                </FieldGroup>
            </Fieldset>

            <Button className="my-6 text-xs" color="emerald" type="submit">Register</Button>

            <Text className="my-6 text-xs" >Do you already have an account? <TextLink href="#" onClick={event => {
                event.preventDefault()

                props.onLoginClick()
            }}>Login now</TextLink></Text>

        </form>

        <Button plain onClick={() => props.onCancelClick()} className="justify-items-start">
            <ArrowUturnLeftIcon />
        </Button>
    </main>
}

export default Register