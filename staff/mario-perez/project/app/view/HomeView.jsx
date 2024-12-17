const useState = React.useState
const useEffect = React.useEffect

function HomeView(props) {
    console.log('HomeView -> render')

    /*
    props -> { onLogout }
    */

    const nameState = useState(null)
    const name = nameState[0]
    const setName = nameState[1]

    console.log('HomeView -> state: name = ' + name)

    useEffect(() => {
        try {
            getUserName()
                .then(name => setName(name))
                .catch(error => {
                    alert(error.message)

                    console.error(error)
                })
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }, [])

    return <main>
        <h2>Bienvenido, {name}</h2>
        <button onClick={function () {
            try {
                logoutUser()
            } catch (error) {
                alert(error.message)

                console.error(error)
            }
        }}>Salir</button>
    </main>
}