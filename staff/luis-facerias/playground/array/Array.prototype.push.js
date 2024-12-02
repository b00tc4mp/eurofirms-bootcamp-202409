
// ARRAY.PROTOTYTPE.PUSH


// The push method of the Array function,
// inserts an element at the end of the Array


console.log('TEST Array.prototype.push')

// Test with a numeric array
console.log('CASE add 400 to nums')

var nums = [100, 200, 300]
var length = nums.push(400)
console.log(nums)
// [100, 200, 300, 400]



// Test with character array
console.log('CASE add F to chars')

var chars = ['A', 'B', 'C', 'D', 'E']
var length = chars.push('F')
console.log(chars)
// ['A', 'B', 'C', 'D', 'E', 'F']