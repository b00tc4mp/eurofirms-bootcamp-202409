var useState = React.useState
var useEffect = React.useEffect

function WelcomeView(props){
    console.log('WelcomeView -> render')

    /*
    props -> { onRegisterClick, onLoginClick } 
    */

    return <main>   
        <h2>welcome!</h2>
        <p>
            please, <a href="" onClick={function (event) {
                event.preventDefault()

                props.onRegisterClick()
            }}>Register</a> or <a href="" onClick={function (event) {
                event.preventDefault()

                props.onLoginClick()
            }}>Login</a>.
        </p>
    </main>
}

function RegisterView(props) {
    console.log('RegisterView -> render')

    /*
    props -> { onLoginClick, onRegisterSuccess }
    */

    return <main>
        <h2>Register</h2>
        
        <form onSubmit={function (event) {
            event.preventDefault()

            var form = event.target

            var name = form.name.value
            var email = form.email.value
            var username = form.username.value
            var password = form.password.value

            try {
                registerUser(name, email, username, password)

                props.onRegisterSuccess()
            } catch (error) {
                alert(error.message)

                console.error(error)
            }
        }}>    
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
    
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
    
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
    
            <label htmlFor="password">password</label>
            <input type="password" id="password" />
    
            <button type="submit">Register</button>
        </form>
    
        <p></p>
    
        <a href="" onClick={function (event) {
            event.preventDefault()

            props.onLoginClick()
        }}>Login</a>
    </main>
}

function LoginView(props) {
    console.log('LoginView-> render')

    /*
    props -> { onRegisterClick, onLoginSuccess }
    */

    return <main>
    <h2>Login</h2>

    <form onSubmit={function (event) {
        event.preventDefault()

        var form = event.target

        var username = form.username.value
        var password = form.password.value

        try {
            loginUser(username, password)

            props.onLoginSuccess()
        } catch (error) {
            alert(error.message)

            console.error(error)
        }
    }}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="password">password</label>
        <input type="password" id="password" />

        <button type="submit">Login</button>
    </form>

    <p></p>

    <a href="" onClick={function (event) {
        event.preventDefault()

        props.onRegisterClick()
    }}>Register</a>
</main>
}

function HomeView(props) {
    console.log('HomeView -> render')

    /*
    props -> { onLogout }
    */

    var nameState = useState(null)
    var name = nameState[0]
    var serName = nameState[1]

    console.log('HomeView -> state: name = ' + name)

    useEffect(function() {
        var name = getUserName()

        serName(name)
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

function App() {
    console.log('App -> render')

    var viewState = useState('welcome')
    var view = viewState[0]
    var setView = viewState[1]

    console.log('App -> state: view = ' + view)

    return <>
        <h1>App</h1>

        {view === 'welcome' && <WelcomeView
            onRegisterClick={function () {
                setView('register')
            }}

            onLoginClick={function () {
                setView('login')
            }}
        />}

        {view === 'register' && <RegisterView
            onLoginClick={function () {
                setView('login')
            }}

            onRegisterSuccess={function () {
                setView('login')
            }}
        />}

        {view === 'login' && <LoginView
    
             onRegisterClick={function () {
                setView('register')
             }}
            
            onLoginSuccess={function () {
                setView('home')
            }}
        />}

        {view === 'home' && <HomeView
            onLogout={function () {
                setView('login')
            }}
        />}
    </>
}
    
var rootElement = document.querySelector('#root')
var root = ReactDOM.createRoot(rootElement)

root.render(<App />)
