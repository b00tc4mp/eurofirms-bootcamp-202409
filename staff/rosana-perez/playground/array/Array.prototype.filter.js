//El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

var numbers = [0, 1, 2, 3, 4, 5, 6]

var pairnumbers = numbers.filter(function (number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }

})

console.log('CASE 1: Discover pairnumbers', pairnumbers);

var numbersmore3 = numbers.filter(function (number) {
    if (number % 3 === 0 && number != 0) {
        return true
    } else {
        return false
    }

})

// [ 0, 2, 4, 6 ]

console.log('CASE 2: Discover numbers divided in three', numbersmore3);

// [3, 6]