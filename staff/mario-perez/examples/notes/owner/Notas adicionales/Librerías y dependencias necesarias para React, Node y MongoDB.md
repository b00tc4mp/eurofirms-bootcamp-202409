## Librerías

### Babel

Esta librería convierte React a Javascript.

Cargar la librería en el index.html

```html
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
En cada referencia a un archivo jsx externo decir que queremos que lo convierta poniéndole como tipo text/babel.

```html
<script src="main.jsx" type="text/babel"></script>
```
