function RegisterView(props) {
    console.log('RegisterView -> render')

    /*
    props -> { onLoginClick, onRegisterSuccess }
    */

    return <main>
        <h2>Register</h2>

        <form onSubmit={function (event) {
            event.preventDefault()

            var form = event.target

            var name = form.name.value
            var email = form.email.value
            var username = form.username.value
            var password = form.password.value

            try {
                registerUser(name, email, username, password)

                props.onRegisterSuccess()
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

        <a href="" onClick={function (event) {
            event.preventDefault()

            props.onLoginClick()
        }}>Login</a>
    </main>
}