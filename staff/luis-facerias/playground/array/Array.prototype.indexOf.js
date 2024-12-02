// ARRAY.PROTOTYTPE.IndexOF


// The IndexOF method of the Array function,
// returns first index where element can be found
console.log('TEST Array.prototype.indexOf')

// Test with array of numbers
console.log('CASE num index for 400')

var nums = [100, 200, 300, 400, 500, 600]
var element = nums.indexOf(400)
console.log(element)
// 3


// Test with array of chars
console.log('CASE char index for E')

var chars = ['A', 'B', 'C', 'D', 'E']
var element = chars.indexOf('E')
console.log(element)
// 4


// Test with cars index starting at index 2
console.log('CASE cars index starting at index 2')

var car  = ['Renault', 'Seat', 'Talbot', 'Mercedes', 'Tesla', 'Tata']
var element = car.indexOf('Mercedes', 2)
console.log(element)
// 3
