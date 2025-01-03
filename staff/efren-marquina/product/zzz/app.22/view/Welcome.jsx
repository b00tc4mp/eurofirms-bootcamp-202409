function Welcome(props) {
    console.log('Welcome -> render')

 
    return <main className='p-30'>
        <h2 className="text-3xl">Welcome!</h2>
        <p>
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