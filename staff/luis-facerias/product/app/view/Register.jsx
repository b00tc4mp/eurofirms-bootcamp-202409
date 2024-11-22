function Register(props) {
    console.log('Register -> render')

    /*
    props -> { onLoginClick, onRegisterSuccess }
    */

    return <main>
        <h2>Register</h2>

        <form onSubmit={event => {
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
                        alert(error.message)

                        console.error(error)
                    })
            } catch (error) {
                alert(error.message)

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

        <a href="" onClick={event => {
            event.preventDefault()

            props.onLoginClick()
        }}>Login</a>
    </main>
}
