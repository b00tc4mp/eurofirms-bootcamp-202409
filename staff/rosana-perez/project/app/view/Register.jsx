import { errors } from 'com'

const { DuplicityError, SystemError, ValidationError } = errors

import registerUser from '../logic/registerUser'

function Register(props) {
    console.log('Register rendering')

    return <main>
        <h2>Register</h2>

        <form onSubmit={event => {
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
            <input type="text" id="name" />

            <label htmlFor="location" name="location">Location</label>
            <input type="text" id="location" />

            <label htmlFor="email" name="email">Email</label>
            <input type="email" id="email" />

            <label htmlFor="username" name="username">Username</label>
            <input type="text" id="username" />

            <label htmlFor="password" name="password">Password</label>
            <input type="password" id="password" />

            <button type="submit">Register</button>
        </form>

        <p></p>

        <a href="" onClick={event => {
            event.preventDefault()

            props.onLoginClick()
        }}>Login</a>
    </main>
}

export default Register