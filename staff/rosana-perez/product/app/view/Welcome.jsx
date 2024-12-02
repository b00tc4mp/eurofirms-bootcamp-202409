function Welcome(props) {

    // props -> onRegisterClick -> onLoginClick

    console.log('Welcome -> render')

    return <main className="p-20">
        <h2 className="bg-black text-white text-3xl h-10 flex justify-center">Welcome!</h2>
        <p className="my-8">
            Please, <a className="underline font-bold" href="" onClick={event => {
                event.preventDefault()

                props.onRegisterClick()
            }}>Register</a> or <a className="underline font-bold" href="" onClick={event => {
                event.preventDefault()

                props.onLoginClick()
            }}>Login</a>.
        </p>
    </main>

}

export default Welcome
