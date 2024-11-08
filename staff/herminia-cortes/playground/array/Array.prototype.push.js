console.log('TEST Array.prototype.push')

console.log('CASE add 400 to nums')

var nums = [100, 200, 300]
var length = nums.push(400)
console.log(nums)
// [100, 200, 300, 400] (4)
console.log(length)
// 4

console.log('CASE add F to chars')

var chars = ['A', 'B', 'C', 'D', 'E']
var length = chars.push('F')
console.log(chars)
// ['A', 'B', 'C', 'D', 'E', 'F'] (6)
console.log(length)
// 6

console.log('CASE add many elements in one call')

var colors = ['red', 'green', 'blue', 'magenta']
var length = colors.push('cyan', 'yellow', 'orange', 'pink')
console.log(colors)
// ['red', 'green', 'blue', 'magenta', 'cyan', 'yellow', 'orange', 'pink']
console.log(length)
// 8


// ejem exercici:

console.log('TEST Array.prototype.push')

console.log('CASE add 500 to nums')

var nums = [100, 200, 300, 400,]
var length = nums.push(500)
console.log(length)
// [100, 200, 300, 400, 500] (5)
console.log(length)
// 5


console.log('CASE add many Elements in one call')

var fruits = ['appel', 'orange','watermelon']
var length = fruits.push('peack','banana')
console.log(fruits)
// ['appel', 'orange', 'watermelon', 'peach', 'banana']
console.log(length)
// 5

