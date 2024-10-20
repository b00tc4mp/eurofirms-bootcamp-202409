/*
El método filter() crea un nuevo array con todos los elementos 
que cumplan la condición implementada por la función dada.
*/

var Arroz = function () { this.length = 0 }

Arroz.prototype.filter = function (callbackFunction) {
    var newArray = []
    var contador = 0
    for (i = 0; i < this.length; i++) {
        if (this[i] !== undefined) {
            if (callbackFunction(this[i])) {
                newArray[contador] = this[i]
                contador++
            }
        }
    }
    return newArray
}

console.log('TEST Arroz.prototype.filter')

console.log('CASE find an element that its value is between 4400 and 5454')

var numbers = new Arroz
numbers[2] = 20
numbers[3] = 4444
numbers[4] = 1
numbers.length = 5

function method(element) {
    if (element > 4400 && element < 5454) {
        return true
    } else {
        return false;
    }
}

console.log(numbers.filter(method))
// [4444]


console.log('CASE find an element that its value more than 20')

var numbers = new Arroz
numbers[0] = undefined
numbers[1] = undefined
numbers[2] = 25
numbers[3] = 4444
numbers[4] = undefined
numbers.length = 5

function method(element) {
    if (element > 20) {
        return true
    } else {
        return false;
    }
}

console.log(numbers.filter(method))
// [25, 4444]