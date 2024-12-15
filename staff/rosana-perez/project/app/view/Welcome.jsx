import { Button } from '../components/button'

function Welcome(props) {
    console.log('Welcome rendering')

    return <main className="text-center w-full pt-[100px]">
        <p className="font-anton  text-xl text-emerald-700 text-left">Dona2-logo (wip)</p>

        <h2 className="font-anton text-4xl uppercase">Welcome!</h2>

        <p> Help the planet and save money! </p>

        <img className="w-full text-center p-10" src="/images/greenWorld.png" />

        <div className="flex justify-center mb-6">
            <Button color="emerald" type="submit" onClick={event => {
                event.preventDefault()

                props.onRegisterClick()
            }}>Register</Button>


            <p className="p-2">or</p>

            <Button color="emerald" type="submit" onClick={event => {
                event.preventDefault()

                props.onLoginClick()
            }}>Login</Button>

        </div>
    </main>
}

export default Welcome

