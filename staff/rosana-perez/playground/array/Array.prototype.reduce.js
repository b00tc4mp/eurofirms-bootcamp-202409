console.log('TEST Array.prototype.reduce')

// El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

const numbers = [100, 200, 300, 400, 500]

console.log('CASO 1.- método reduce con valor inicial')

{const initialValue = 100

const reducedNumbers =  numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue}, initialValue)

console.log(numbers)
console.log(reducedNumbers);

// también puede configurarse como: var sum = numbers.reduce(function(accum, num){return accum + num}, 0)
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


console.log('CASO 5 -> Extract total from cart')

var cart = [
    {brand: 'colgate', title: 'tooth paste', type: 'hygiene', quantity: 2, price: 3},
    {brand: 'aldi', title: 'avena milk', type: 'food', quantity: 3, price: 1.2},
    {brand: 'aldi', title: 'humus', type: 'food',quantity: 1, price: 2.5},
    {brand: 'aldi', title: 'beans', type: 'food',quantity: 4, price: 2.1}
]

var total = cart.reduce (function (total, item) {
    return total + item.quantity * item.price
}, 0)

console.log(total)
//expected output -> 20.5


console.log('CASO 6 -> extract total count hygiene and food products from cart')

var stats = cart.reduce(function(stats, item) {
    if (item.type === 'hygiene') //si el item.type es 'hygiene', 
        stats.hygiene++ // sumar en stats.hygiene
    else if(item.type === 'food')
        stats.food++

    return stats
}, {hygiene: 0, food: 0}) // poner contadores a cero, en un objeto con los dos item.type

console.log(stats)
//expected output-> hygiene: 1, food: 3


