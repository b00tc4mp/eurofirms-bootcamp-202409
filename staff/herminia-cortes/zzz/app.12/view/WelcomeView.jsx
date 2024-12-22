function WelcomeView(props) {
    console.log('WelcomeView -> render')

    /*
    props -> { onRegisterclick, onLoginClick }
    */

    return <main>
        <h2>Welcome!</h2>
        <p>
            Please, <a href="" onClick={function (event) {
                event.preventDefault()

                props.onRegisterClick()
            }}>Register</a> or <a href="" onclick={function (event) {
                event.preventDefault()

                props.onLoginClick()
            }}>Login</a>.
        </p>
    </main>
}