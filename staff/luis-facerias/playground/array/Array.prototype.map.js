// ARRAY.PROTOTYTPE.MAP

// The map method of the Array function
// returns a new array with result of calling a function on every element

console.log('TEST Array.prototype.map')


// Check if map returns a new array with every multiplied by itself
console.log('CASE every number multiplied by itself')

var numbers = [2, 5, 9, 11, 7, 1]
var numbers2 = numbers.map((x) => x ** 2)
console.log(numbers2)
// [ 4, 25, 81, 121, 49, 1 ]


// Check reformatted objec
console.log('CASE create a new array with remorfatted code')
const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
]
const reformattedArray = kvArray.map(({ key, value }) => ({ [key] : value ** 2 }));

console.log(reformattedArray)
// [ { '1': 100 }, { '2': 400 }, { '3': 900 } ]