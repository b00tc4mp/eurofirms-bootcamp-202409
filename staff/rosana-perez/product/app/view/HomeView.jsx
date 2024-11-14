const useState = React.useState

const useEffect = React.useEffect


function HomeView(props) {
    console.log('HomeView -> render')

    //props -> {Logout}

    const nameState = useState(null)
    const name = nameState[0]
    const setName = nameState[1]

    console.log('HomeView -> state: name = ' + name)

    useEffect(function () {
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
        <h2>Home</h2>

        {name && <h3>Hello, {name}!</h3>}

        <button onClick={function () {
            try {
                logoutUser()

                props.onLogout()
            } catch (error) {
                alert(error.message)

                console.error(error)

            }
        }}>Logout</button>
    </main>
}