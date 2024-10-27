// ARRAY.PROTOTYTPE.FILL

// The at method of the Array function
// fill array with values between two index, return new array

console.log('TEST Array.prototype.fill')

// Check to fill array with a string between index to array end
console.log('CASE fill array with a number between two index')
var cars = ['Renault', 'Tata', 'Simca', 'Talbot', 'Tesla']
var element = cars.fill('auto', 1)
console.log(element)
// ['Renault', 'Tata', 'Simca', 'Renault']


// Check to fill array with a string between two array index
console.log('CASE fill array with a string between two array index')
var cars = ['Renault', 'Tata', 'Simca', 'Talbot', 'Tesla']
var element = cars.fill('auto', 1, 3)
console.log(element)
// [ 'Renault', 'auto', 'auto', 'Talbot', 'Tesla' ]


// Check to fill array with a string all array
console.log('CASE fill array with a string all array')
var cars = ['Renault', 'Tata', 'Simca', 'Talbot', 'Tesla']
var element = cars.fill('auto')
console.log(element)
// [ 'auto', 'auto', 'auto', 'auto', 'auto' ]
