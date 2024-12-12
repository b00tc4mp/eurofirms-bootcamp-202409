import { errors } from 'com'
import { Button } from '../components/button'
import { Input } from '../components/input'
import { Text, TextLink } from '../components/text'
import { Field, FieldGroup, Fieldset, Label } from '../components/fieldset'

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

        <p></p>
        <Button type="button" color="emerald" onClick={() => props.onCancelClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
        </Button>
    </main>
}

export default Register