/*
    array.reverse()

    Invertir el orden de las propiedades
*/

function reverseElement(object) {
    // Repetimos hasta la mitad del objeto
    for (var i = object.length - 1; i > (object.length - 1) / 2; i--) {
        // Guardamos el elemento actual
        var apartar = object[i];
        // Intercambiamos posiciones: el último por el primero, el penúltimo por el segundo, etc.
        object[i] = object[object.length - 1 - i];
        object[object.length - 1 - i] = apartar;
    }
    return object; // Devolvemos el objeto invertido
}

var colores = {
    0: 'rojo',
    1: 'azul',
    2: 'verde',
    3: 'amarillo',
    4: 'naranja',
    length: 5
}

/*
RESULTADO ESPERADO -> colores = {
    0: 'naranja',
    1: 'amarillo',
    2: 'verde',
    3: 'azul',
    4: 'rojo',
    length: 5
}
*/

console.log('colores antes de invertir', colores);

console.log('colores invertidos', reverseElement(colores));
