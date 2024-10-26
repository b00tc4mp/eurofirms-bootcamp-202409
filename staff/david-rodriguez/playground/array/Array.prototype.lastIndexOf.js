console.log('TEST Array.prototype.lastIndexOf.js')

console.log('CASE get search last 2')

var nums = [1, 2, 3, 2, 5, 6, 1, 2, 4, 1]
var index = nums.lastIndexOf(2)
console.log(index)
// 7

console.log('CASE search last 2 from index 4')

var nums = [1, 2, 3, 2, 5, 6, 1, 2, 4, 1]
var index = nums.lastIndexOf(2, 4)
console.log(index)
// 3

console.log('CASE search last 2 use negative index')

var nums = [1, 2, 3, 2, 5, 6, 1, 2, 4, 1]
var index = nums.lastIndexOf(2, -8)
console.log(index)
// 1

console.log('CASE search last invalid number')

var nums = [1, 2, 3, 2, 5, 6, 1, 2, 4, 1]
var index = nums.lastIndexOf(7)
console.log(index)
// -1

console.log('CASE with no solution')

var nums = [1, 2, 3, 2, 5, 6, 1, 2, 4, 1]
var index = nums.lastIndexOf(5, -7)
console.log(index)
// -1


console.log('CASE when fromIndex is bigger than length')

var nums = [1, 2, 3, 2, 5, 6, 1, 2, 4, 1]
var index = nums.lastIndexOf(5, -12)
console.log(index)
// -1