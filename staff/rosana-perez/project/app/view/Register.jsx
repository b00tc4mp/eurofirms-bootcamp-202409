import { errors } from 'com'
import { Button } from '../components/button'
import { Input } from '../components/input'

const { DuplicityError, SystemError, ValidationError } = errors

import registerUser from '../logic/registerUser'

function Register(props) {
    console.log('Register rendering')

    return <main className="p-4 text-center w-full pt-[100px]">

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
            <label htmlFor="name" name="name">Name</label>
            <Input type="text" id="name" />

            <label htmlFor="location" name="location">Location</label>
            <Input type="text" id="location" />

            <label htmlFor="email" name="email">Email</label>
            <Input type="email" id="email" />

            <label htmlFor="username" name="username">Username</label>
            <Input type="text" id="username" />

            <label htmlFor="password" name="password">Password</label>
            <Input type="password" id="password" />

            <Button className="my-6 text-xs" type="submit">Confirm register!</Button>

            <a className="pb=10" href="" onClick={event => {
                event.preventDefault()

                props.onLoginClick()
            }}>
                <Button className="my-6 text-xs">Login</Button></a>


        </form>

        <p></p>
        <Button type="button" onClick={() => props.onCancelClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
            </svg>
        </Button>
    </main>
}

export default Register