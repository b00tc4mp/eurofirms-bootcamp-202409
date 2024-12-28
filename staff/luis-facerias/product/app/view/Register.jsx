import { errors } from 'com'

const { DuplicityError, SystemError, ValidationError } = errors

import registerUser from '../logic/registerUser'

function Register(props) {
    console.log('Register -> render')

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            registerUser(name, email, username, password)
                .then(() => props.onRegisterSuccess())
                .catch(error => {
                    if (error instanceof DuplicityError)
                        alert(error.message)
                    else if (error instanceof SystemError)
                        alert('sorry, there was a problem. try again later.')

                    console.error(error)
                })
        } catch (error) {
            if (error instanceof ValidationError)
                alert(error.message)
            else
                alert('sorry, there was a problem. try again later.')

            console.error(error)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    return <main className="p-20">
        <h2 className="text-3xl">Register</h2>

        <form className="flex flex-col gap-2" onSubmit={handleRegisterSubmit}>
            <label htmlFor="name">Name</label>
            <input className="border-2 border-black px-2" type="text" id="name" />

            <label htmlFor="email">E-mail</label>
            <input className="border-2 border-black px-2" type="email" id="email" />

            <label htmlFor="username">Username</label>
            <input className="border-2 border-black px-2" type="text" id="username" />

            <label htmlFor="password">Password</label>
            <input className="border-2 border-black px-2" type="password" id="password" />

            <button className="bg-black text-white" type="submit">Register</button>
        </form>

        <p></p>

        <a className="underline" href="" onClick={handleLoginClick}>Login</a>
    </main>
}

export default Register