import { errors } from 'com'

import { Button } from '../components/button'
import { Input } from '../components/input'
import { Text, TextLink } from '../components/text'
import { Field, FieldGroup, Fieldset, Label } from '../components/fieldset'

import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline'

const { CredentialsError, SystemError, ValidationError } = errors

import loginUser from '../logic/loginUser'

function Login(props) {
    console.log('Login rendering')

    const handleOnLoginSubmit = event => {
        event.preventDefault()

        const form = event.target

        const username = form.username.value
        const password = form.password.value

        try {
            loginUser(username, password)
                .then(() => props.onLoginSuccess())
                .catch(error => {
                    if (error instanceof CredentialsError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('Sorry, there was a problem. Try again later.')

                    console.error(error)
                })
        } catch (error) {
            if (error instanceof ValidationError) {
                alert(error.message)
            } else {
                alert('Sorry, there was a problem. Try again later.')
            }

            console.error(error)
        }
    }

    const handleOnRegisterClick = event => {
        event.preventDefault()

        props.onRegisterClick()
    }

    const handleOnCancelClick = () => props.onCancelClick()


    return <main className="text-center h-full w-full justify-items-center p-6 py-8">

        <h2 className="font-bold text-emerald-700">Sign in</h2>

        <form className="p-4 text-left" onSubmit={handleOnLoginSubmit}>
            <Fieldset>
                <FieldGroup>

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

            <Button className="my-6 text-xs" color="emerald" type="submit">Login</Button>

            <Text className="my-6 text-xs" >Don't have an account? <TextLink href="#" onClick={handleOnRegisterClick}>Register now</TextLink></Text>

        </form>

        <p></p>



        <Button plain onClick={handleOnCancelClick} className="justify-items-start">
            <ArrowUturnLeftIcon />
        </Button>


    </main >
}

export default Login