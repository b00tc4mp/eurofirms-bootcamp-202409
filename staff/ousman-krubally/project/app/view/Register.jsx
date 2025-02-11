import { errors } from 'com'

const { DuplicityError, SystemError, ValidationError } = errors

import registerUser from '../logic/registerUser'

function Register(props) {
    console.log('Register -> render')

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const from = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value

        try {
            registerUser(name, email, username, password)
                .then(() => props.onRegisterSucces())
                .cath(error => {
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

    return <main>
        <h2>Register</h2>

        <form onSubmit={handleRegisterSubmit}>
            <label htmlForm="name">Name</label>
            <input type="text" id="name" />

            <label htmlForm="email">E-mail</label>
            <input type="email" id="email" />

            <label htmlForm="username">Username</label>
            <input type="text" id="username" />

            <label htmlForm="password">Password</label>
            <input type="password" id="password" />

            <button type="submit">Register</button>
        </form>

        <p></p>

        <a href="" onClick={handleLoginClick}>Login</a>
    </main>
}

export default Register