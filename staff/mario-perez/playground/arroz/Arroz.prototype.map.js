/*
El método map() crea un nuevo array con los resultados 
de la llamada a la función indicada aplicados a cada uno de sus elementos.
*/

var Arroz = function () { this.length = 0 }

Arroz.prototype.map = function (callbackFunction) {
    var newArray = []
    for (i = 0; i < this.length; i++) {
        newArray[newArray.length] = callbackFunction(this[i])
    }
    return newArray
}

console.log('TEST Arroz.prototype.map')

console.log('CASE each element is multiplicated 2')

var numbers = new Arroz
numbers[0] = 400
numbers[1] = 6000
numbers[2] = 20
numbers[3] = 4444
numbers[4] = 1
numbers.length = 5

function method(element) {
    return element * 2
}

console.log(numbers.map(method))
// [800, 12000, 40, 8888, 2]

console.log('CASE each element add 5')

var numbers = new Arroz
numbers[0] = 400
numbers[1] = 6000
numbers[2] = 20
numbers[3] = 4444
numbers[4] = 1
numbers.length = 5

function method2(element) {
    return element + 5
}

console.log(numbers.map(method2))
// [405, 6005, 25, 4449, 6]