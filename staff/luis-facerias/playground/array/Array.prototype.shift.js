// ARRAY.PROTOTYTPE.SHIFT


// The shift method of the Array function,
// remove first element from array

console.log('TEST Array.prototype.shift')

//Check to shift in this array
var cars = ['Renault', 'Talbot', 'Ford', 'Seat', 'Skoda', 'Daewo', 'Mercedes', 'Toyota']

console.log('CASE returns an array without first element')
var array_rmfirst = cars.shift()
console.log(array_rmfirst)
console.log(cars)
// Renault
// ['Talbot', 'Ford', 'Seat', 'Skoda', 'Daewo', 'Mercedes', 'Toyota' ]

