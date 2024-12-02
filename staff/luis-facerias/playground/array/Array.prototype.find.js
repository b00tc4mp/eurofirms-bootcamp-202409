// ARRAY.PROTOTYPE.FIND

// The find method of the Array function
// returns the first result of a conditional search function

console.log('TEST Array.prototype.find')


// Check if find returns the first result of a conditional search
console.log('CASE returns the first result of a conditional search')

var cars = ['Renault', 'Talbot', 'Ford', 'Seat', 'Skoda', 'Daewo', 'Toyota']
var car = cars.find(function (car) {
    return car.length > 5
})
console.log(car)
// Renault


console.log('CASE returns the first result of car with k its name')
var car = cars.find(function (car) {
    return car.includes('k')
})
console.log(car)
// Skoda