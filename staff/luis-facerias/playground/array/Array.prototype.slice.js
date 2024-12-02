// ARRAY.PROTOTYPE.SLICE

// The some method of the Array function
// returns a portion of an array into a new array

console.log('TEST Array.prototype.slice')

// Check if slice returns a portion of an array into a new array
console.log('SLICE Returns a portion of an array into a new array')

var cars = ['Renault', 'Talbot', 'Ford', 'Seat', 'Skoda', 'Daewo', 'Mercedes', 'Toyota']

console.log('CASE returns a portion of an array into a new array')
var new_cars = cars.slice(1, 4)
console.log(new_cars)
// [ 'Ford', 'Seat' ]

console.log('CASE returns a new array stating by the end')
var new_cars = cars.slice(-3)
console.log(new_cars)
// [ 'Daewo', 'Mercedes', 'Toyota' ]