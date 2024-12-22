function WelcomeView(props) {
    console.log('WelcomeView -> render')

    /*
    props -> { onRegisterClick, onLoginClick}
    */

    return <main>
        <h2>Welcome</h2>
        <p>
            Please, <a href="" onClick={function (event) {
                event.preventDefault()

                props.onRegisterClick()
            }}>Register</a> or <a href=""onClick={function (event) {
                event.preventDefault()

                props.onLoginDefault()
            }}>Login</a>
        </p>
    </main>
}