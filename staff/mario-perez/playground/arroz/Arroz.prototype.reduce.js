/*
El método reduce() ejecuta una función reductora sobre cada elemento de un array, 
devolviendo como resultado un único valor.

Recoge como parámetros el acumulador y el valor actual, y devuelve el acumulador

Si se pone un valor inicial, se cuenta el primer elemento, si no se pone, empieza por el índice 1
*/

var Arroz = function () { this.length = 0 }

Arroz.prototype.reduce = function (callbackFunction, initialValue) {
    var start
    var total
    if (initialValue === undefined) {
        start = 1
    } else {
        start = 0
        total = initialValue
    }
    for (var i = start; i < this.length; i++) {
        total = callbackFunction(total, this[i])
    }
    return total
}

console.log('TEST Arroz.prototype.reduce')

console.log('CASE find an element that its value is between 4400 and 5454')

var numbers = new Arroz
numbers[0] = 3
numbers[1] = 1
numbers[2] = 2
numbers[3] = 5
numbers[4] = 1
numbers.length = 5

function method(acumulator, element) {
    return acumulator + element
}

console.log(numbers.reduce(method, 10))
// 22