function Welcome(props) {
    console.log('Welcome rendering')

    return <main>
        <h2>Welcome!</h2>
        <div>

        </div>

        <button type="submit" onClick={event => {
            event.preventDefault()

            props.onRegisterClick()
        }}>Register</button>

        <button type="submit" onClick={event => {
            event.preventDefault()

            props.onLoginClick()
        }}>Login</button>

    </main>
}

export default Welcome