import { errors } from 'com'

import { Button } from '../components/button'
import { Input } from '../components/input'
import { Text, TextLink } from '../components/text'
import { Field, FieldGroup, Fieldset, Label } from '../components/fieldset'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

const { DuplicityError, SystemError, ValidationError } = errors

import logic from '../logic/index.js'

function Register() {
    console.log('Register rendering')

    const navigate = useNavigate()

    const handleError = error => {
        if (error instanceof DuplicityError) {
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

    const handleOnExit = () => navigate("/")

    const handleOnLogin = () => navigate("/login")

    const handleOnRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const location = form.location.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        const registerData = { name, location, email, username, password }

        try {
            logic.registerUser(name, location, email, username, password)
                .then(() => navigate("/", { state: registerData }))
                .catch(error => handleError(error))

        } catch (error) { handleError(error) }
    }


    return <main className="text-center h-full w-full justify-items-center p-6 py-8">
        <header className="w-full flex justify-between items-center px-2 h-24 z-10">
            <div className="flex lg:flex-1">
                <a href="#" className="m-1.5 p-1.5">
                    <span className="sr-only">Dona2</span>
                    <img
                        alt=""
                        src="/images/greenWorld.png"
                        className="h-12 w-auto"
                    />
                    <p className="px-3 py-2.5 flex justify-center font-semibold text-emerald-700">Dona2</p>
                </a>
            </div>

            <Button plain onClick={handleOnExit} className="justify-items-end">
                <ArrowUturnLeftIcon />
            </Button>
        </header>

        <h2 className="font-bold  mt-12 ">Register</h2>

        <form className="p-4 text-left" onSubmit={handleOnRegisterSubmit}>
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

            <Text className="my-6 text-xs" >Do you already have an account? <TextLink href="#" onClick={handleOnLogin}>Login now</TextLink></Text>

        </form>
    </main>
}

export default Register