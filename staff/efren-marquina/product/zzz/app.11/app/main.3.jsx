var useState = React.useState

function WelcomeView(props) {
    /*
    props -> { onRegisterClick, onLoginClick }
    */

    return <main>
        <h2>Welcome!</h2>
        <p>
            Please, <a href="" onClick={function (event) {
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
    /*
    props -> { onLoginClick }
    */

    return <main>
        <h2>Register</h2>

        <form>
            <label for="name">Name</label>
            <input type="text" id="name" />

            <label for="email">E-mail</label>
            <input type="email" id="email" />

            <label for="username">Username</label>
            <input type="text" id="username" />

            <label for="password">Password</label>
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
    /*
    props -> { onRegisterClick }
    */

    return <main>
        <h2>Login</h2>

        <form>
            <label for="username">Username</label>
            <input type="text" id="username" />

            <label for="password">Password</label>
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

function App() {
    var viewState = useState('welcome')
    var view = viewState[0]
    var setView = viewState[1]

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
        />}

        {view === 'login' && <LoginView
            onRegisterClick={function () {
                setView('register')
            }}
        />}
    </>
}


var rootElement = document.querySelector('#root')
var root = ReactDOM.createRoot(rootElement)

root.render(<App />)