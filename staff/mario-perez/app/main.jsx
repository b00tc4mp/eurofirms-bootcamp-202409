var title = <h1>App</h1>

var WelcomeView = <main>
    <h2>Welcome!</h2>
    <p>
        Please, <a href="">Register</a> or <a href="">Login</a>.
    </p>
</main>

var registerView = <main>
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

        <buttom type="submit">Register</buttom>
    </form>

    <p></p>

    <a href="">Login</a>
</main>

var loginView = <main>
    <h2>Login</h2>

    <form>
        <label for="username">Username</label>
        <input type="text" id="username" />

        <label for="password">Password</label>
        <input type="password" id="password" />

        <buttom type="submit">Login</buttom>
    </form>

    <p></p>

    <a href="">Register</a>
</main>


var rootElement = document.querySelector('#root')
var root = ReactDOM.createRppt(rootElement)

root.render([title, welcomeView, registerView, loginView])