import { errors } from 'com'
import { Button } from '../components/button'
import { Input } from '../components/input'

const { CredentialsError, SystemError, ValidationError } = errors

import loginUser from '../logic/loginUser'

function Login(props) {
    console.log('Login rendering')

    return <main className="text-center w-full pt-[100px]">

        <h2 className="font-bold text-emerald-700">Login</h2>

        <form className="p-4 text-left" onSubmit={event => {
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
                if (error instanceof ValidationError)
                    alert(error.message)
                else
                    alert('Sorry, there was a problem. Try again later.')

                console.error(error)
            }
        }}>
            <label htmlFor="username" name="username">Username</label>
            <Input type="text" id="username" />

            <label htmlFor="password" name="password">Password</label>
            <Input type="password" id="password" />

            <Button className="my-6 text-xs" type="submit">Confirm login!</Button>

            <a className="pb=10" href="" onClick={event => {
                event.preventDefault()

                props.onRegisterClick()
            }}>
                <Button className="my-6 text-xs" >Register</Button></a>

        </form>

        <p></p>


        <Button type="button" onClick={() => props.onCancelClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
        </Button>

    </main>
}

export default Login