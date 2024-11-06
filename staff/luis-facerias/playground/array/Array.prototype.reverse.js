
// ARRAY.PROTOTYTPE.REVERSE


// The reverse method of the Array function,
// returns an array with elements in reverse order

console.log('TEST Array.prototype.reverse')

//Check to reverse an array
var cars = ['Renault', 'Talbot', 'Ford', 'Seat', 'Skoda', 'Daewo', 'Mercedes', 'Toyota']

console.log('CASE returns a reversed array')
var reversed_cars = cars.reverse()
console.log(reversed_cars)
//['Toyota', 'Mercedes', 'Daewo',  'Skoda', 'Seat', 'Ford', 'Talbot', 'Renault']


//Check empty element in array
var cars = ['Renault', 'Talbot', 'Ford', , 'Skoda', , 'Mercedes', 'Toyota']
var reversed_cars = cars.reverse()
console.log(reversed_cars)
//['Toyota', 'Mercedes', <1 empty item>, 'Skoda', <1 empty item>, 'Ford', 'Talbot', 'Renault']

