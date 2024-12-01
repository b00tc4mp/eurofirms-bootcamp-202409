import { errors } from 'com'

const { CredentialsError, SystemError, ValidationError } = errors

import loginUser from '../logic/loginUser'

import './Login.css'

function Login(props) {
    console.log('Login -> render')

    /*
    props -> { onRegisterClick, onLoginSuccess }
    */

    return <main>
        <h2>Login</h2>

        <form className="login-form" onSubmit={event => {
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
        }}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />

            <button type="submit">Login</button>
        </form>

        <p></p>

        <a href="" onClick={event => {
            event.preventDefault()

            props.onRegisterClick()
        }}>Register</a>
    </main>
}

export default Login