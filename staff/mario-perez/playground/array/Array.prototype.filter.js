/*
El método filter() crea un nuevo array con todos los elementos
que cumplan la condición implementada por la función dada.
*/

console.log('TEST Array.prototype.filter')

console.log("CASE element is more than 250 and less than 412")

var numbers = [100, 200, 300, 500, 800, 800, 800]

//function

var callBackFunction = function (element) {
    return element > 250 && element < 412
}

console.log(numbers.filter(callBackFunction))
// [300]