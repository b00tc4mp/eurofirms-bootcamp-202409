/*
    array.push()
    añade en la última posición del array un elemento
*/
function addElement(object, element) {
    // Nuestra función añadirá dentro del objeto -> object <- en la última posición -> object.length <- el elemento -> element <-
    object[object.length] = element;
    // Incrementamos la longitud -> object.length <- en 1
    object.length++;
}

var colores = {
    0: 'rojo',
    1: 'azul',
    2: 'amarillo',
    length: 3
}

console.log('PRUEBA 1: añadir el color "verde" a colores')

addElement(colores, 'verde')

console.log('colores', colores)

console.log('Resultado esperado -> { 0: "rojo", 1: "azul", 2: "amarillo", 3: "verde", length: 4 }')

addElement(colores, 'naranja')

console.log('colores', colores)

console.log('Resultado esperado -> { 0: "rojo", 1: "azul", 2: "amarillo", 3: "verde", 4: "naranja", length: 5 }')
