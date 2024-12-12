function Welcome(props) {
    console.log('Welcome -> render')

    const handleRegisterClick = event => {
        event.preventDefault()

        props.onRegisterClick()
    }

    const handleLoginClick = event => {
        event.preventDefault()

        props.onLoginClick()
    }

    return <main>
        <h2>Bienvenidos a APP</h2>
        <p>Por favor, <a href="" onClick={handleRegisterClick}>Register</a> or <a href="" onClick={handleLoginClick}>Login</a>.</p>
    </main>
}

export default Welcome