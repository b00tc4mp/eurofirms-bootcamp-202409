## Crear HTML y primeros pasos con JavaScript: Primera clase

Crear archivo index.html con el código con todas las secciones visibles, como, por ejemplo:


``` html
<body>
	<section>
		<form></form>
	</section>
</body>
```

Para que JavaScript seleccione alguna etiqueta del HTML haremos

``` js
let sections = document.queryselectorAll('section') //todas las secciones
```

sustituyendo ``'section' `` por la etiqueta HTML que queramos seleccionar. Ahora la variable ``sections`` hará referencia a un objeto que contendrá todas las secciones del HTML (cada sección será un elemento).

Definiremos una variable y le asignaremos un elemento que apuntará a una sección. A esta variable le atribuimos el atributo ``display`` de esta forma:

``` js
let formSection = sections[0]
formSection.style.display = '' // se verá
formSection.style.display = 'none' // no se verá
```

Por defecto, en los links, se recarga la página, así que habrá que hacer una función que se ejecute sólo si hacemos una determinada acción (en el caso del link, hacer click). Además habrá que prevenir el comportamiento por defecto lo primero. Esto queda reflejado así:

``` js
linkSection.addEventListener('click', function (event) {
	event.preventDefault()
	
	// función callback que indica qué hacer

}
```

Para recoger un elemento, como un formulario, en vez de `querySelectorAll` será  simplemente `querySelector`. Cuando queramos controlar un formulario, la acción que se pone es `submit`.
Si queremos tomar un input se ha de escribir
``` js
formInput.value // forInput es un elemento del objeto form
```
Así estaremos accediendo al valor del input del formulario, obteniéndolo de la misma forma que se obtuvo el formulario.

### Registro

Para el registro usaremos de momento un array vacío llamado ``users``. Será nuestra base de datos de momento.

```js
let users = []; //definimos el array users
let user = {}; // user será el objeto y cada elemento del array users

user.input = input.value //añadimos la propiedad input al objeto user con el valor del input del formulario

users.push(user) // añadimos el objeto al array users
```

> [!Info] 
> Con el método **reset**, limpiamos un formulario

## Primeros pasos con JavaScript: Segunda clase

Si se actualiza la pantalla, tal y como está la app (los datos se almacenan en memoria), se borran los datos. 

### Login
El login también es un formulario, así pues hacemos los mismos pasos y lo ponemos en el callback submit:

```js
var loginForm = loginSection.querySelector('form')

        loginForm.addEventListener('submit', function (event) {

            event.preventDefault() // hacemos que el link no funcione por defecto
            
            var loginFormInputs = loginForm.querySelectorAll('input')
            
            var loginFormUsernameInput = loginFormInputs[0]
            var loginFormPasswordInput = loginFormInputs[1]

            var username = loginFormUsernameInput.value
			var password = loginFormPasswordInput.value
```
- 
