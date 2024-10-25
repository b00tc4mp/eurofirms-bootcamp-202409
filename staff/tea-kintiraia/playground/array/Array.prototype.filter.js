var numbers = [0, 1, 2, 3, 4, 5, 6]

var pairnumbers = [0, 1, 2, 3, 4, 5, 6]

var pairnumbers = numbers.filter(function (number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }

})

// El resultado esperado: 0, 2, 4, 6.

console.log('CASE 1: Discover pairnumbers', pairnumbers);

var numbersmore3 = numbers.filter(function (number) {
    if (number % 3 && number != 0) {
        return true
    } else {
        return false
    }

})

console.log('CASE 2: Discover numbers divided in three', numbersmore3);


// El resultado esperado:

/* 
CASE 1: Discover pairnumbers (4) [0, 2, 4, 6]
VM325:27 CASE 2: Discover numbers divided in three (4) [1, 2, 4, 5]
VM325:47 CASE 3: Discover numbers higher than 10 (2) [11, 12]
VM325:64 CASE 4: Discover numbers divided in 5 (3) [0, 5, 10]

*/

var numbers = [0, 9, 10, 11, 12]
var numbersHigher10 = [0, 9, 10, 11, 12]
var numbersHigher10 = numbers.filter(function (number) {
    if (number > 10) {
        return true
    } else {
        return false
    }


})

console.log('CASE 3: Discover numbers higher than 10', numbersHigher10);
 // El resultado esperado: 11, 12(fine)



var numbers = [0, 1, 2, 3, 4, 5, 10]

var numbersdivided5 = [0, 1, 2, 3, 4, 5, 10]

var numbersdivided5 = numbers.filter(function (number) {
    if (number % 5 === 0) {
        return true
    } else {
        return false
    }

})
console.log('CASE 4: Discover numbers divided in 5', numbersdivided5);

// El resultado esperado: 0, 5, 10

var numbers = [0, 1, 2, 3, 4, 5, 6]

var numbersdivided3 = [0, 1, 2, 3, 4, 5, 6]

var numbersdivided3 = numbers.filter(function (number) {
    if (number % 3 === 0) {
        return true
    } else {
        return false
    }

})

console.log('CASE 4: Discover numbers divided in 3', numbersdivided3);

// [0, 3, 6]







/* El método filter() crea un nuevo array con todos los elementos que cumplan 
la condición implementada por la función dada.
Sintaxis:
var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])
*/

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// El resultado esperado: Array ["exuberant", "destruction", "present"]

