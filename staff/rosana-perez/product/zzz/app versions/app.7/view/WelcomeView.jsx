function WelcomeView(props) {

    // props -> onRegisterClick -> onLoginClick

    console.log('WelcomeView -> render')

    return <main>
        <h2>Welcome!</h2>
        <p>
            Please, <a href="" onClick={function (event) {
                event.preventDefault()

                props.onRegisterClick()
            }}>Register</a> or <a href="" onClick={function (event) {
                event.preventDefault()

                props.onLoginClick()
            }}>Login</a>.
        </p>
    </main>

}
