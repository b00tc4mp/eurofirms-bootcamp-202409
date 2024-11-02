console.log('TEST Array.prototype.slice')

console.log('CASE get all array')

var numbers = [2, 3, 5, 7, 11, 13, 17, 19]
console.log(numbers.slice())
// [2, 3, 5, 7, 11, 13, 17, 19]


console.log('CASE get part of the array from index 2')

var numbers = [2, 3, 5, 7, 11, 13, 17, 19]
console.log(numbers.slice(2))
// [5, 7, 11, 13, 17, 19]


console.log('CASE get part of the array from index 2 to 6')

var numbers = [2, 3, 5, 7, 11, 13, 17, 19]
console.log(numbers.slice(2, 6))
// [5, 7, 11, 13]


console.log('CASE start index > length')

var numbers = [2, 3, 5, 7, 11, 13, 17, 19]
console.log(numbers.slice(20))
// []


console.log('CASE get from start = index 3 and end > length')

var numbers = [2, 3, 5, 7, 11, 13, 17, 19]
console.log(numbers.slice(3, 20))
// [7, 11, 13, 17, 19]


console.log('CASE get from start index = -5 and end index = -2')

var numbers = [2, 3, 5, 7, 11, 13, 17, 19]
console.log(numbers.slice(-5, -2))
// [7, 11, 13]