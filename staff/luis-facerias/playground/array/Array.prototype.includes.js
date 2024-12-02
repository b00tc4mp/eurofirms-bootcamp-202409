// ARRAY.PROTOTYTPE.INCLUDES

// The Includes method of the Array function
// returns boolean whether the element exists or not

console.log('TEST Array.prototype.include')


// Check if the ferrary is included in the array
console.log('CASE check cars includes Ferrai')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('ferrari')
console.log(contains)
// fiesta


// Check if the fiesta is included in the array
console.log('CASE check cars includes fiesta')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('fiesta')
console.log(contains)
// fiesta


// Check if the fiesta is included in the array at index 1
console.log('CASE check cars includes lambo from index 1')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('lambo', 1)
console.log(contains)
// false
