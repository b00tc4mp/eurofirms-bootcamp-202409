import { errors } from 'com'

const { DuplicityError, SystemError, ValidationError } = errors

import registerUser from '../logic/registerUser'

import './Register.css'

function Register(props) {
    console.log('Register -> render')

    //props -> {onLoginClick, onRegisterSuccess}

    return <main>
        <h2>Register</h2>

        <form className="register-form" onSubmit={event => {
            event.preventDefault()

            const form = event.target

            const name = form.name.value
            const email = form.email.value
            const username = form.username.value
            const password = form.password.value

            // parte asincrona, espera a la respuesta del servidor
            try {
                registerUser(name, email, username, password)
                    .then(() => props.onRegisterSuccess())
                    .catch(error => {
                        if (error instanceof DuplicityError)
                            alert(error.message)
                        else if (error instanceof SystemError)
                            alert('sorry, there was a problem. try again later')

                        console.error(error)
                    })
            } catch (error) {
                if (error instanceof ValidationError)
                    alert(error.message)
                else
                    ('sorry, there was a problem. try again later')

                console.error(error)
            }
        }}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />

            <label htmlFor="username">Username</label>
            <input type="text" id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />

            <button type="submit">Register</button>
        </form>

        <p></p>

        <a href="" onClick={function (event) {
            event.preventDefault()

            props.onLoginClick()
        }}>Login</a>
    </main>
}

export default Register
