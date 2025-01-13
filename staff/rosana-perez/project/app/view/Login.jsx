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

            <Button plain onClick={handleOnCancelClick} className="justify-items-end">
                <ArrowUturnLeftIcon />
            </Button>
        </header>

        <h2 className="font-bold mt-20">Sign in</h2>

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
    </main >
}

export default Login