import { errors } from 'com'

const { CredentialsError, SystemError, ValidationError } = errors

import loginUser from '../logic/loginUser'

function Login(props) {
    console.log('Login -> render')

    /*
    props -> { onRegisterClick, onLoginSuccess }
    */

    return <main className='bg-gray-900 h-screen'>
        <h2 className="text-red-900">Login</h2>

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
            <label htmlFor="username" className='text-red-900'>Username</label>
            <input className='border-red-900 border-4' type="text" id="username" />

            <label htmlFor="password" className='text-red-900'>Password</label>
            <input className='border-red-900 border-4' type="password" id="password" />

            <button type="submit" className='text-red-900'>Login</button>
        </form>

        <p></p>

        <a href="" onClick={event => {
            event.preventDefault()

            props.onRegisterClick()
        }} className='text-red-900'>Register</a>
    </main>
}

export default Login