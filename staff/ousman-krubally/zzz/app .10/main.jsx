var title = <h1>App</h1>

var welcomeView = <main>
    <h2>welcome!</h2>
    <p>
        please, <a href="">Register</a> or <a href="">Login</a>.
    </p>
</main>

var registerView = <main>
    <h2>Register</h2>
    <form>
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

    <a href="">Login</a>
</main>

var loginView = <main>
    <h2>Login</h2>

    <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="password">password</label>
        <input type="password" id="password" />

        <button type="submit">Login</button>
    </form>

    <p></p>

    <a href="">Register</a>
</main>

var rootElement = document.querySelector('#root')
var root = ReactDOM.createRoot(rootElement)

root.render([title, welcomeView, registerView, loginView])
