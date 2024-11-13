// ARRAY.PROTOTYPE.REDUCE

// The reduce method of the Array function
// returns a single value as a result callback function

console.log('TEST Array.prototype.reduce')

// Check if reduce returns a single value as a callback function result
console.log('Check if reduce returns a single value as a callback function result')


var numbers = [4, 1, 5, 11, 6, 7, 9]


console.log('CASE returns the sum of the array values')
var initValue = 0
var suma =numbers.reduce((acc, curr) => acc + curr)
console.log(suma)
// 43


console.log('CASE returns the product of the array values')
var initValue = 0
var pro =numbers.reduce((acc, curr) => acc * curr)
console.log(pro)
// 83160