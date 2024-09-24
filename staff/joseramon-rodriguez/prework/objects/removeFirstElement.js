/*
    array.shift()
    elimina el primer elemento y lo devuelve y modifica la  longitud

*/

function removeFirstElement(object) {
    //guardar la valor de la propiedad que vamos a elminar ->numbers[0]<-
    var result = object[0]
    // para borrar la primera propiedad moveriamos todas las demas propiedades -> las propiedades a partir de numbers[0]<-
    for (var i = 0; i < object.length - 1; i++) {
        // numbers[0] = numbers[1]
        // numbers[1] = numbers[2]
        object[i] = object[i + 1]
        // numbers[0] = numbers[1]
        // numbers[1] = numbers[2]
    }
    // elminar la ultima propiedad -> numbers[2]
    delete object[object.length - 1]
    //  actualizar la propiedad length -> numbers.length
    object.length--

    return result//la primera propiedad
}

//  var numbers  = {
//  0:1,
//  1:2,
//  length : 2
//
//  }   return 0

// numbers = {
//     0: 1,
//     1: 1,
//     2: 2,
//     length: 3
// }

// numbers = {
//     0: 1,
//     1: 2,
//     2: 2,
//     length: 3
// }

var numbers = {
    0: 0,
    1: 1,
    2: 2,
    length: 3
}
console.log('numbers before shift', numbers)

console.log('first element of numbers', removeFirstElement(numbers))

console.log('numbers after shift', numbers)

console.log('first element of numbers after second shift', removeFirstElement(numbers))
//X 2 -> roberto, tea, david, luis f, efren, oscar,juan,mario  O 1->herminia , luis n, josep
console.log('numbers after 2 shifts', numbers)
//X{ length : 0 } -> herminia // X { length: 1} -> oscar, roberto, efren,tea, josep // O {0:2 , length: 1} -> david, luis n, juan, luis f, mario