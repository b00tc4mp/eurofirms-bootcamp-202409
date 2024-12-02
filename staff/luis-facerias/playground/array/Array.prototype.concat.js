// ARRAY.PROTOTYTPE.CONCAT

// The at method of the Array function
// returns one or more merged arrays

console.log('TEST Array.prototype.concat')

// Check if concat merge two or more arrays
console.log('CASE merge two arrays')

var chars1 = ['a', 'b', 'c']
var chars2 = ['d', 'e', 'f']
var element = chars1.concat(chars2)
console.log(element)
// [ 'a', 'b', 'c', 'd', 'e', 'f' ]

console.log('CASE merge multiple arrays')
var num1 = ['1', '2', '3']
var num2 = ['4', '5', '6']
var num3 = ['7', '8', '9']
var element = num1.concat(num2, num3)
console.log(element)
// ['1', '2', '3', '4', '5', '6', '7', '8', '9']