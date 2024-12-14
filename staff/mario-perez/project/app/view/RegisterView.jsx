function RegisterView(props) {
    console.log('RegisterView -> render')

    return <main>
        <h2>Registro</h2>

        <form onSubmit={function (event) {
            event.preventDefault()

            var form = event.target

            var name = form.name.value
            var email = form.email.value
            var username = form.username.value
            var password = form.password.value

            try {
                registerUser(name, email, username, password)
                    .then(() => props.onRegisterSuccess())
                    .catch(error => {
                        alert(error.message)

                        console.error(error)
                    })

                props.onRegisterSuccess()
            } catch (error) {
                alert(error.message)

                console.error(error)
            }
        }}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" />

            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" />

            <label htmlFor="username">Usuario</label>
            <input type="text" id="username" />

            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" />

            <button type="submit">Registrar</button>
        </form>

        <p></p>

        <p>¿Ya estás registrado? <a href=""
            onClick={
                function (event) {
                    event.preventDefault()

                    props.onLoginClick()
                }
            }>Inicia sesión</a>.</p>

    </main>
}
