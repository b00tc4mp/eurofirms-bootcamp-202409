function Welcome(props){
    console.log('Welcome -> render')

    /*
    props -> { onRegisterClick, onLoginClick } 
    */

    return <main>   
        <h2>welcome!</h2>
        <p>
            please, <a href="" onClick={event => {
                event.preventDefault()

                props.onRegisterClick()
            }}>Register</a> or <a href="" onClick={event => {
                event.preventDefault()

                props.onLoginClick()
            }}>Login</a>
        </p>
    </main>
}