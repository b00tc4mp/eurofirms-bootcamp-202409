/*
El método some() comprueba si al menos un elemento del array cumple con la condición implementada 
por la función proporcionada.


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
// false*/




console.log('TEST Array.prototype.some')

console.log('CASE find if exist fruits with the letter M ')

var fruits = ['Banana', 'Mango', 'Piña', 'Fresa', 'Manzana']

var exists1 = fruits.some(function (fruit) {
    if (fruit.includes('M') || fruit.includes('m'))
        return true
    // return (fruit.includes('M') || fruit.includes('m'))
})

console.log(exists1)
// true


console.log('CASE find phone smartphone')

var phones = ['Blackberry', 'Motorola', 'Nokia']

var smartphone = phones[3]

var exists2 = phones.some(function (phone) {
    if (phones.includes(smartphone)) {
        return true
    } else {
        return false
    }
})
console.log(exists2)
// false




















