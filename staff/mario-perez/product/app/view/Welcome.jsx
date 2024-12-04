function Welcome(props) {
    console.log('Welcome -> render')

    /*
    props -> { onRegisterClick, onLoginClick }
    */

    /*return <main className="p-20">
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
    </main>*/

    return <main className="p-20 justify-items-center w-full">
        <h2 className="text-3xl">Welcome!</h2>
        <div className="mt-10 grid-rows-2 flex flex-col w-50">
            <button className="bg-black px-2 mb-10"><a className="underline text-white" href="" onClick={event => {
                event.preventDefault()

                props.onRegisterClick()
            }}>Register</a></button>
            <button className="bg-black px-2"><a className="underline text-white" href="" onClick={event => {
                event.preventDefault()

                props.onLoginClick()
            }}>Login</a></button>
        </div>
    </main>
}

export default Welcome