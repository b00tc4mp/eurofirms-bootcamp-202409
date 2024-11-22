function LoginView(props) {
    console.log('LoginView -> render')

    /*
    props -> { onRegisterClick, onLoginSuccess }
    */

    return <main>
        <h2>Login</h2>

        <form onSubmit={function (event) {
            event.preventDefault()

            const form = event.target

            const username = form.username.value
            const password = form.password.value

            try {
                loginUser(username, password)
                    .then(() => props.onLoginSuccess())
                    .catch(error => {
                        alert(error.message)

                        console.error(error)
                    })
            } catch (error) {
                alert(error.message)

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

        <a href="" onClick={function (event) {
            event.preventDefault()

            props.onRegisterClick()
        }}>Register</a>
    </main>
}
