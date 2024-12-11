function WelcomeView(props) {
    console.log('WelcomeView -> render')
    return <main>
        <h2>ParkSpot</h2>
        <p>
            Bienvenido a ParkSpot, la app para localizar tu coche.
            Por favor, <a href="" onClick={
                function (event) {
                    event.preventDefault()

                    props.onRegisterClick()
                }
            }>regístrate</a> para comenzar.
            Si ya estás registrado, <a href="" onClick={
                function (event) {
                    event.preventDefault()

                    props.onLoginClick()
                }} >inicia sesión</a>.
        </p>
    </main>
}