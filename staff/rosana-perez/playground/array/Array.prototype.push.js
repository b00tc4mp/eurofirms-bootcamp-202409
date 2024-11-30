console.log('TEST Array.prototype.push')

console.log('CASE add 400 to nums')

var nums = [100, 200, 300]
var length = nums.push(400)
console.log(nums)
// expected result -> [100, 200, 300, 400] (4)
console.log(length)
// expected result -> (4)

console.log('CASE add F to chars')

var chars = ['A', 'B', 'C', 'D', 'E']
var length = chars.push('F')
console.log(chars)
// expected result -> ['A', 'B', 'C', 'D', 'E', 'F'] (6)
console.log(length)
// expected result -> 6


console.log('CASE add many elements in one call')

var colors = ['red', 'green', 'blue', 'magenta']
console.log('length before push -> ', colors.length)
//expected result -> 4
var length = colors.push('cyan', 'yellow', 'orange', 'pink')
console.log(colors)
// expected result -> [ 'red', 'green', 'blue', 'magenta', 'cyan', 'yellow', 'orange', 'pink' ]
console.log('length after push -> ', length)
//expected result -> 8


