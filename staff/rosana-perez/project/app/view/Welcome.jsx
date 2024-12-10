import { Button } from '../components/button'

function Welcome(props) {
    console.log('Welcome rendering')

    return <main>
        <h2>Dona2</h2>

        <h3 className="font-anton text-4xl uppercase">Welcome!</h3>

        <p>Help the planet and save money! </p>

        <div>
            <img src="/images/greenWorld.png" />
        </div>

        <Button type="submit" onClick={event => {
            event.preventDefault()

            props.onRegisterClick()
        }}>Register</Button>

        <Button type="submit" onClick={event => {
            event.preventDefault()

            props.onLoginClick()
        }}>Login</Button>

    </main>
}

export default Welcome