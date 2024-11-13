console.log('TEST Array.prototype.reduce')

// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

const numbers = [100, 200, 300, 400, 500]

console.log('CASO 1.- método reduce con valor inicial')

{const initialValue = 100

const reducedNumbers =  numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue}, initialValue)

console.log(numbers)
console.log(reducedNumbers);
}

{console.log('CASO 2.- método reduce sin valor inicial')

const reducedNumbersNoInitialValue =  numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue})

console.log(reducedNumbersNoInitialValue);
}

{console.log('CASO 3.- método reduce con valor inicial en ES6, js6')

const initialValue = 100

const reducedNumbersJ6 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)

console.log(reducedNumbersJ6);
}

console.log('CASO 4.- método reduce con letras')

const letras = ['A', 'B', 'C', 'D', 'E']

const initialValueLetras = 'Z'

const reducedLetras = letras.reduce((accumulator, currentValue) => accumulator + currentValue, initialValueLetras)

console.log(letras);
console.log(reducedLetras);