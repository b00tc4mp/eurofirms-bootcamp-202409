console.log('TEST Array.prototype.push')
//El push()método de Arrayinstancias agrega los elementos especificados al final de una matriz y devuelve la nueva longitud de la matriz.

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
