function RegisterView(props) {
    console.log('RegisterView -> render')

    //props -> {onLoginClick, onRegisterSuccess}

    return <main>
        <h2>Register</h2>

        <form onSubmit={function (event) {
            event.preventDefault()

            const form = event.target

            const name = form.name.value
            const email = form.email.value
            const username = form.username.value
            const password = form.password.value

            try { // parte asincrona, espera a la respuesta del servidor
                registerUser(name, email, username, password)
                    .then(()=> props.onRegisterSucess())
                    .catch(error => {
                        alert(error.message)

                        console.error(error)
                    })         
            } catch (error) {
                alert(error.message)

                console.error(error)
            }
        }}>
            <label for="name">Name</label>
            <input type="text" id="name" />

            <label for="email">E-mail</label>
            <input type="email" id="email" />

            <label for="username">Username</label>
            <input type="text" id="username" />

            <label for="password">Password</label>
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
