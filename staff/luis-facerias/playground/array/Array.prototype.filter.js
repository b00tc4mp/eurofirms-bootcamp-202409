// ARRAY.PROTOTYPE.FILTER

// The filter method of the Array function
// returns a portion from given array filtered by function condition

console.log('TEST Array.prototype.filter')

// Check if filter returns filtered array by condition

var cars = ['Renault', 'Talbot', 'Ford', 'Seat', 'Skoda', 'Daewo', 'Toyota']

console.log('CASE returns cars with k in car name')
var result = cars.filter((car) => car.includes('k'))
console.log(result)
// [ 'Skoda' ]
