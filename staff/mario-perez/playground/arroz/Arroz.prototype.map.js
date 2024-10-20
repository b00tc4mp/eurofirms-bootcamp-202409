/*
El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
*/

var Arroz = function () { this.length = 0 }

Arroz.prototype.map = function (callbackFunction) {
    for (i = 0; i < this.length; i++) {
        if (callbackFunction(this[i])) {
            return this[i]
        }
    }
    return undefined
}

console.log('TEST Arroz.prototype.map')

console.log('CASE find an element that its value is between 4400 and 5454')

var numbers = new Arroz
numbers[0] = 400
numbers[1] = 6000
numbers[2] = 20
numbers[3] = 4444
numbers[4] = 1
numbers.length = 5

function method(element) {
    return element > 4400 && element < 5454
}

console.log(numbers.map(method))
// [4444]