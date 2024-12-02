/*
    array.pop()
    quita el elemento en la última posición
*/
function removeLastElement(object) {
    // Quitamos dentro del objeto -> object <- el elemento situado en la última posición -> object.length <-
    delete object[object.length - 1];
    // Decrementamos la longitud -> object.length <- en 1
    object.length--;
}

var coloresPrimarios = {
    0: 'rojo',
    1: 'azul',
    2: 'amarillo',
    length: 3
}

var coloresSecundarios = {
    0: 'verde',
    1: 'naranja',
    2: 'morado',
    length: 3
}

var paletaDeColores = {
    0: 'negro',
    1: 'blanco',
    2: 'gris',
    3: 'marrón',
    4: 'rosa',
    5: coloresPrimarios,
    6: 'cian',
    7: 'magenta',
    8: coloresSecundarios,
    9: 'violeta',
    length: 10
}

console.log('PRUEBA 1: Quitar el último elemento de coloresPrimarios')

removeLastElement(coloresPrimarios);

console.log('coloresPrimarios', coloresPrimarios);

console.log('Resultado esperado: { 0: "rojo", 1: "azul", length: 2 }');

removeLastElement(paletaDeColores);

console.log('paletaDeColores', paletaDeColores);

console.log('Resultado esperado: { 0: "negro", 1: "blanco", 2: "gris", 3: "marrón", 4: "rosa", 5: { 0: "rojo", 1: "azul", length: 2 }, 6: "cian", 7: "magenta", 8: { 0: "verde", 1: "naranja", 2: "morado", length: 3 }, length: 9 }');

// coloresPrimarios = {
//     0: "rojo",
//     1: "azul",
//     length: 2
// }

// paletaDeColores = {
//     0: "negro",
//     1: "blanco",
//     2: "gris",
//     3: "marrón",
//     4: "rosa",
//     5: { 0: "rojo", 1: "azul", length: 2 },
//     6: "cian",
//     7: "magenta",
//     8: { 0: "verde", 1: "naranja", 2: "morado", length: 3 },
//     length: 9
// }
