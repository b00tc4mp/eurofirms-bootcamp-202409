
## Uso de Local Storage

### Conceptos Clave

- **Local Storage**: Es una API de almacenamiento web que permite almacenar datos de manera persistente en el navegador del usuario.
    
- **JSON**: Formato de texto ligero para el intercambio de datos. Es fácil de leer y escribir para los humanos y fácil de parsear y generar para las máquinas.
    
- `JSON.parse`: Método que convierte una cadena JSON en un objeto JavaScript.
    
- `JSON.stringify`: Método que convierte un objeto JavaScript en una cadena JSON.
    

### Explicación del Código

1. **Guardar datos en Local Storage**:
    
    - Cuando guardamos datos en memoria, estos se pierden al recargar la página o iniciar una nueva sesión. Para evitar esto, podemos usar Local Storage, que almacena los datos de manera persistente en el navegador del usuario.
        
2. **Convertir JSON a Objeto JavaScript**:
    
    - Local Storage trabaja con cadenas JSON, pero nosotros operamos con objetos JavaScript. Por tanto, antes de cualquier operación que afecte a los datos almacenados, debemos convertir las cadenas JSON a objetos JavaScript.

```js
var users = JSON.parse(localStorage,users)
```

- `JSON.parse(localStorage.users)`: Convierte la cadena JSON almacenada en Local Storage en un objeto JavaScript.
        
- **Convertir Objeto JavaScript a JSON**:
    
    Después de realizar las operaciones necesarias, debemos volver a convertir los objetos JavaScript a cadenas JSON para almacenarlos en Local Storage.

```js
localStorage.users = JSON.stringify(users)
```

### Aclaraciones

- **Persistencia de Datos**: Local Storage permite que los datos persistan incluso después de cerrar el navegador o apagar el dispositivo.
    
- **Capacidad de Almacenamiento**: Local Storage tiene una capacidad de almacenamiento limitada (generalmente alrededor de 5MB por dominio).
    

### Resumen

- **Local Storage**: Utilizado para almacenar datos de manera persistente en el navegador.
    
- **JSON**: Formato de datos utilizado para almacenar y transferir datos.
    
- `JSON.parse` **y** `JSON.stringify`: Métodos para convertir entre cadenas JSON y objetos JavaScript.