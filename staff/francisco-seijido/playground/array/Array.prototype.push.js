console.log('TEST Array.prototype.push')

console.log('CASE add 400 to nums')

var nums = [100, 200, 300]
var length = nums.push(400)


console.log(nums)

//[100,200,300,400] (4)

console.log(length)
//4

console.log('CASE AND F to chars')

var chars = ['A', 'B', 'C', 'D', 'E']
var length = chars.push('F')

console.log(chars)

//['A','B','C',','D','E','F'] (6)

console.log(length)
//6


