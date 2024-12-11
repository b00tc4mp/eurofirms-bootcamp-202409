var useState = React.useState
var useEffect = React.useEffect

function HomeView() {
    console.log('HomeView -> render')
    const [saludo, setSaludo] = useState("hola")

    var [name, setName] = useState("")
    var viewState = useState(null)
    var view = viewState[0]
    var setView = viewState[1]

    console.log('HomeView -> state: name = ' + name)

    useEffect(function () {
        var name = getUserName()

        setName(name)
        console.log("useEffect")
    }, [])

    return <main>
        <h2>Bienvenido, {name}</h2>
        <p>{saludo}</p>
        <button onClick={function () {
            try {
                logoutUser()
            } catch (error) {
                alert(error.message)

                console.error(error)
            }
        }}>Salir</button>
        <button onClick={() => setSaludo("Adios")}>Prueba</button>
    </main>
}