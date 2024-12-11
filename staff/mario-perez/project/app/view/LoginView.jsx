function LoginView(props) {
    console.log('LoginView -> render')

    return <main>
        <h2>Iniciar sesión</h2>
        <p></p>
        <form onSubmit={function (event) {
            event.preventDefault()

            var form = event.target

            var username = form.username.value
            var password = form.password.value

            try {
                loginUser(username, password)

                props.onLoginSuccess()
            } catch (error) {
                alert(error.message)

                console.error(error)
            }
        }}>
            <label htmlFor="username">Usuario</label>
            <input type="text" id="username" />

            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" />

            <button type="submit">Iniciar sesión</button>
        </form>

        <p></p>

        <p>¿No estás registrado? <a href="" onClick={
            function (event) {
                event.preventDefault()

                props.onRegisterClick()
            }
        }>Regístrate ahora</a>.</p>

    </main>
}