function Welcome(props) {
    console.log('Welcome -> render')

    /*
    props -> { onRegisterClick, onLoginClick }
    */

    return <main className="p-20">
        <h2 className="text-3xl">Welcome!</h2>
        <p className="mt-10">
            Please, <a className="underline" href="" onClick={event => {
                event.preventDefault()

                props.onRegisterClick()
            }}>Register</a> or <a className="underline" href="" onClick={event => {
                event.preventDefault()

                props.onLoginClick()
            }}>Login</a>.
        </p>
    </main>
}

export default Welcome