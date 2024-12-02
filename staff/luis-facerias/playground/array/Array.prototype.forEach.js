// ARRAY.PROTOTYTPE.CONCAT

// The forEach method of the Array function
// returns a function result for each array element

console.log('TEST Array.prototype.forEach')


// Check if forEach return a function result: print values
console.log('CASE result callback function: print values')

var cars = ['Renault', 'Talbot', 'Ford', 'Seat', 'Skoda', 'Daewo', 'Toyota']
cars.forEach(function (car) {
    console.log(car)
})


// Check if forEach return a function result: cars started with S
console.log('CASE result callback function: cars started with S')

var cars = ['Renault', 'Talbot', 'Ford', 'Seat', 'Skoda', 'Daewo', 'Toyota']
cars.forEach(function (car) {
    car.startsWith('S') ? console.log(car) : false
})
//Seat Skoda