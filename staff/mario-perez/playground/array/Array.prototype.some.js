/*
El método some() comprueba si al menos un elemento del array cumple con la condición implementada 
por la función proporcionada.
*/

console.log('TEST Array.prototype.some')

console.log("CASE element is 200")

var arr = [100, 200, 300, 400, 300, 800, 800]

//function

var callBackFunction = function (element) {
    return element > 250 && element < 412
}

console.log(arr.some(callBackFunction))
// true

console.log("CASE element is more than 801")

var arr = [100, 200, 300, 400, 300, 800, 800]

//function

var callBackFunction = function (element) {
    return element > 801
}

console.log(arr.some(callBackFunction))
// false