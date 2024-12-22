function WelcomeView() {
    return <main>
        <h2>Welcome!</h2>
        <p>
            Please, <a href="">Register</a> or <a href="">Login</a>.
        </p>
    </main>
}

function RegisterView() {
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

        <a href="">Login</a>
    </main>
}

function LoginView() {
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

        <a href="">Register</a>
    </main>
}


var rootElement = document.querySelector('#root')
var root = ReactDOM.createRoot(rootElement)

root.render(<>
     <h1>App</h1>

     <WelcomeView />
     {/* <RegisterView /> */}
    {/* <LoginView /> */}
</>)