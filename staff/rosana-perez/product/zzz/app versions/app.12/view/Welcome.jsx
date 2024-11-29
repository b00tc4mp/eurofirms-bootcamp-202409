function Welcome(props) {

    // props -> onRegisterClick -> onLoginClick

    console.log('Welcome -> render')

    return <main>
        <h2>Welcome!</h2>
        <p>
            Please, <a href="" onClick={event => {
                event.preventDefault()

                props.onRegisterClick()
            }}>Register</a> or <a href="" onClick={event => {
                event.preventDefault()

                props.onLoginClick()
            }}>Login</a>.
        </p>
    </main>

}

export default Welcome
