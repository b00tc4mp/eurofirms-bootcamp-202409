```insta-toc
---
title:
  name: Contenido
  level: 1
  center: false
exclude: ""
style:
  listType: number
omit: []
levels:
  min: 1
  max: 6
---

# Contenido

1. Componentes, vistas y render
    1. La función useState
    2. El objeto Props
2. Mecanizando el envío de los formularios
    1. La propiedad target
3. Creando el componente HomeView
```

## Componentes, vistas y render

Cada vista (welcome, login y registro) se pone en HTML en una función con este esqueleto. Este es un ejemplo de la función RegisterView donde se pone la vista de registro:

```jsx
function RegisterView() {
    return <main><h2>Registro</h2>
		<form>
			<label for="name">Nombre</label>
			<input type="text" id="name" />

            <label for="email">Correo electrónico</label>
            <input type="email" id="email" />

            <label for="username">Usuario</label>
            <input type="text" id="username" />

            <label for="password">Contraseña</label>
            <input type="password" id="password" />

            <button type="submit">Registrar</button>
		</form>

        <p></p>

        <p>¿Ya estás registrado? <a href="">Inicia sesión</a>.</p>
        
    </main>

}
```

### La función useState

Para encender y apagar las vistas se usa ``useState()``, que devuelve un array con dos elementos:
- la <u>vista</u> que se ve en ese momento
- una <u>función</u> que te permite cambiarla 

Primero definiremos la variable:

```jsx
var useState = React.useState
```

Luego, la función principal, llamada App, quedaría así:

```jsx
function App () {
	var viewState = useState('welcome') // la vista actual
	var view = viewState[0]
	var setView = viewState[1]
	
    return <>
        <h1>App</h1>

        <button onClick={ 
	        function () {
	            setView('welcome')
	        } 
        }>Go To Welcome</button>

        <button onClick={ 
	        function () {
	            setView('login')
	        }
        }>Go To Login</button>

  
        <button onClick={ 
	        function () {
				 setView('register')
	        } 
        }>Go To Register</button>


		{view === 'welcome' && <WelcomeView />}
        {view === 'register' && <RegisterView />}
        {view === 'login' && <LoginView />}

  
        {/* {view === 'welcome' ? <WelcomeView /> : null}
        {view === 'register' ? <RegisterView /> : null}
        {view === 'login' ? <LoginView /> : null} */}
    </>

}
```
En cada evento de los botones llamamos a ``setView()``, que retorna el estado actual, que será el que le pasamos como parámetro.

### El objeto Props

En el código anterior se ve que son los botones los que están "encendiendo" y "apagando" las vistas. Pero, ¿y si los interruptores están dentro de los propios componentes? Podríamos pasarle directamente el evento a la llamada del componente:

```jsx
{view === 'welcome' && <WelcomeView
	onRegisterClick={function () {
		setView('register')
	}}
 />}
```

Pero la función que retorna la vista tendría que recibir el evento. Esto lo conseguimos con el objeto ``props``, que se lo pasamos por parámetro.

> [!props]
> __Props__ es un objeto  que incluye todas las propiedades de un componente, y se usa con el fin de que los componentes puedan comunicarse usando las propiedades uno del otro.

La función recibiría la propiedad y ya podemos usarla:

```jsx
<a href="" onClick={
	function(event){
		event.preventDefault() // para que no funcione por defecto

		props.onRegisterClick() // llamamos a la función en el objeto props
	}
}>regístrate</a>
```

Si hay más de un interruptor en un mismo componente, se pone la función callback justo después de la anterior:
```jsx
{view === 'welcome' && <WelcomeView
            onRegisterClick={function () {
                setView('register')
            }}

            onLoginClick={function () {
                setView('login')
            }}
        />}
```
Esto generará automáticamente otro elemento en el objeto ``props`` y podremos usarlo en la función:

```jsx
function WelcomeView(props) {
    return <main>
        <h2>ParkSpot</h2>
        <p>
            Bienvenido a ParkSpot, la app para localizar tu coche.
            Por favor, <a href="" onClick={
                    function(event){
                        event.preventDefault()
  
                        props.onRegisterClick()
                    }

                }>regístrate</a> para comenzar.

            Si ya estás registrado, <a href="" onClick={
                function (event) {
                    event.preventDefault()
 
                    props.onLoginClick()
                }
            } >inicia sesión</a>.
        </p>
    </main>
}
```

## Mecanizando el envío de los formularios

### La propiedad target

>[!target]
  >La propiedad __target__ la tienen todos los eventos y sirve para llegar al objeto original donde se ha producido la acción, que en el caso de un formulario es submit. Por tanto target alcanza el formulario.

La porción de código que declara y asigna las variables quedaría de esta manera:

```jsx
<form onSubmit={function (event) {
            event.preventDefault()

            var form = event.target

            var username = form.username.value
            var password = form.password.value
```

Seguimos con un try-catch donde el camino feliz es registrarse / iniciar sesión llamando a una función que use el ``setView`` y pasándola a ``props`` No olvidemos que antes debemos prevenir el botón.

## Creando el componente HomeView

Lo hacemos como una vista más, con etiquetas.

```jsx
function HomeView () {
    return <main>
        <h2>Bienvenido, usuario</h2>
        <button>Salir</button>
    </main>
}
```

En este caso, sería conveniente cambiar la palabra usuario por el nombre del usuario que se haya conectado. Aquí entra en juego el uso de los estados. Mas concretamente con ``useEffect``.

>[!useEffect]
> Se usa cuando se necesita interactuar con algo fuera del componente

```jsx
 useEffect(function () {
        var name = getUserName()

        setName(name)
    }, [])
```

La función con el try-catch completa quedaría así:

```jsx
function HomeView() {
    console.log('HomeView -> render')

    var viewState = useState(null)
    var view = viewState[0]
    var setView = viewState[1]

    console.log('HomeView -> state: name = ' + name)

    useEffect(function () {
        var name = getUserName()

        setName(name)
    }, [])

    return <main>
        <h2>Bienvenido, usuario</h2>
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
```

