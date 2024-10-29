console.log('TEST Array.prototype.map.js')

/*
El método map() crea un nuevo array con los resultados de la llamada 
a la función indicada aplicados a cada uno de sus elementos.
Map no modifica el array original.
*/

var numbers = [1, 2, 3, 4, 5, 6]


console.log('CASE 1 -> multiply numbers by 2')

var doubles = numbers.map(function (multiply2) {
    return multiply2 * 2;
})

console.log('Numbers are -> ', numbers)
// Numbers are [1, 2, 3, 4, 5, 6]

console.log('Double numbers are -> ', doubles);
// Double numbers are [2, 4, 6, 8, 10, 12]


console.log('CASE 2 -> substract -2 from numbers')

var substract2 = numbers.map(function (substractFunction) {
    return substractFunction - 2;
})

console.log('Numbers with -2 substracted are -> ', substract2)
// Numbers with -2 substracted are [-1, 0, 1, 2, 3, 4]


console.log('CASE 3 -> split numbers by 100')

var splitBy100 = numbers.map(function (divide) {
    return divide / 100;
})

console.log('Numbers divided by 100 are -> ', splitBy100)
// Numbers divided by 100 are -> [0.01, 0.02, 0.03, 0.04, 0.05, 0.06]


console.log('CASE 3 -> split numbers by -100')

var splitByLess100 = numbers.map(function (divide) {
    return divide / -100;
})

console.log('Numbers divided by -100 are -> ', splitByLess100)
// Numbers divided by -100 are -> [-0.01, -0.02, -0.03, -0.04, -0.05, -0.06]