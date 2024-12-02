/*
    Añadir múltiples elementos (colores)
*/

function addElements(object) {
    // Recorrer el objeto arguments y añadir los elementos a partir de la última posición del objeto
    for (var i = 1; i < arguments.length; i++) {
        // Extraer el color exacto a añadir
        var element = arguments[i];
        // Introducir el color en la siguiente posición disponible en el objeto
        object[object.length] = element;
        // Incrementar la longitud del objeto
        object.length++;
    }
}

var colores = {
    0: 'rojo',
    1: 'azul',
    2: 'verde',
    length: 3
}

console.log('CASO 1 -> añadir "amarillo" y "naranja" a colores');

addElements(colores, 'amarillo', 'naranja');

console.log('Resultado esperado -> { 0: "rojo", 1: "azul", 2: "verde", 3: "amarillo", 4: "naranja", length: 5 }', colores);

/*
    Resultado esperado:
    colores = {
        0: 'rojo',
        1: 'azul',
        2: 'verde',
        3: 'amarillo',
        4: 'naranja',
        length: 5
    }
*/
