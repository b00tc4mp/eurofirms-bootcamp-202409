/*
El método reduce() ejecuta una función reductora sobre cada elemento de un array, 
devolviendo como resultado un único valor.

Recoge como parámetros el acumulador y el valor actual, y devuelve el acumulador

Si se pone un valor inicial, se cuenta el primer elemento, si no se pone, empieza por el índice 1
*/

let Arroz = function () { this.length = 0 }

Arroz.prototype.reduce = function (callbackFunction, initialValue) {
    //Declaración de variables
    let start = 0
    let total

    // Primero, valoramos si se ha definido el valor inicial
    if (initialValue === undefined) {
        start = 1
        total = this[0]
    } else {
        total = initialValue
    }

    // Para cada elemento, llamamos a la función
    // Guardamos lo que devuelve la función en la variable acumulativa
    // Al final, la devolvemos
    for (let i = start; i < this.length; i++) {
        total = callbackFunction(total, this[i])
    }
    return total
}

console.log('TEST Arroz.prototype.reduce')

console.log('CASE call with initial value is 10')

let numbers = new Arroz
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

console.log('CASE call with initial value is 5')

let numbers = new Arroz
numbers[0] = 3
numbers[1] = 1
numbers[2] = 2
numbers[3] = 5
numbers[4] = 1
numbers.length = 5

function method2(acumulator, element) {
    return acumulator + element
}

console.log(numbers.reduce(method2, 5))
// 17

console.log('CASE call without initial value')

let numbers = new Arroz
numbers[0] = 3
numbers[1] = 1
numbers[2] = 2
numbers[3] = 5
numbers[4] = 1
numbers.length = 5

function method3(acumulator, element) {
    return acumulator + element
}

console.log(numbers.reduce(method3))
// 12