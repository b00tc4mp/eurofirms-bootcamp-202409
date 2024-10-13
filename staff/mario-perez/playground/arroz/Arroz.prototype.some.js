/*
El método some() comprueba si al menos un elemento del array cumple con la condición implementada 
por la función proporcionada.
*/

var Arroz = function () { this.length = 0 }

Arroz.prototype.some = function (callbackFunction) {
    for (i = 0; i < this.length; i++) {
        if (callbackFunction(this[i])) {
            return true
        }
    }
    return false
}

console.log('TEST Arroz.prototype.some')

console.log('CASE return the element in position of parameter function')

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

console.log(numbers.find(method))
// 4444


console.log('CASE find an element that is not a number ')

console.log(numbers.find(function (element) {
    if (typeof element !== 'number') {
        return true
    }
    return false
}))

// false