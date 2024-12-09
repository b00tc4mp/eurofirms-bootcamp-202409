function Welcome(props) {
    console.log('Welcome rendering')

    return <main>
        <h2>Dona2</h2>

        <h3>Welcome!</h3>

        <p>Help the planet and save money! </p>

        <div>
            <img src="./components/images/greenWorld.png" />
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