const useState = React.useState

function App() {
    console.log('App -> render')

    const viewState = useState(isUserLoggedIn() ? 'home' : 'welcome')
    const view = viewState[0]
    const setView = viewState[1]

    console.log('App -> state: view = ' + view)

    return <>
        <h1>App</h1>

        {view === 'welcome' && <Welcome
            onRegisterClick={() => setView('register')}

            onLoginClick={() => setView('login')}
        />}

        {view === 'register' && <Register
            onLoginClick={() => setView('login')}

            onRegisterSuccess={() => setView('login')}
        />}

        {view === 'login' && <Login
            onRegisterClick={() => setView('register')}

            onLoginSuccess={() => setView('home')}
        />}

        {view === 'home' && <Home
            onLogout={() => setView('login')}

            onCreatePost={() => setView('create-post')}
        />}

        {view === 'create-post' && <CreatePost
            onCreated={() => setView('home')}
        />}
    </>
}