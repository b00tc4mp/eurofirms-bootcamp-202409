/*
    array.unshift()
    añade un elemento en la primera posición
*/
function addFirstElement(object, element) {
    // Empujamos los elementos existentes una posición hacia adelante
    for (var i = object.length; i > 0; i--) {
        // Mueve cada elemento una posición adelante
        object[i] = object[i - 1];
    }
    // Añadimos el nuevo elemento en la primera posición
    object[0] = element;

    // Incrementamos la longitud y devolvemos el nuevo length
    object.length++;

    return object.length;
}

var colores = {
    0: 'rojo',
    1: 'azul',
    2: 'amarillo',
    length: 3
}

/* 
Resultado esperado al añadir 'verde':
colores = {
    0: 'verde',
    1: 'rojo',
    2: 'azul',
    3: 'amarillo',
    length: 4
}
*/

console.log('colores antes de añadir "verde"', colores);

console.log('longitud después de añadir "verde"', addFirstElement(colores, 'verde'));

console.log('colores después de añadir "verde"', colores);


/*
Resultado esperado al añadir 'naranja':
colores = {
    0: 'naranja',
    1: 'verde',
    2: 'rojo',
    3: 'azul',
    4: 'amarillo',
    length: 5
}
*/

console.log('longitud después de añadir "naranja"', addFirstElement(colores, 'naranja'));

console.log('colores después de añadir "naranja"', colores);
