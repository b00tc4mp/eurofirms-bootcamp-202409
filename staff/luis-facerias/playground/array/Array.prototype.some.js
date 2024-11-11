// ARRAY.PROTOTYPE.SOME

// The some method of the Array function
// returns true if an element implemented by the provided function

console.log('TEST Array.prototype.some')

// Check if some returns true if an element implemented by the provided function
console.log('CASE returns true if found the first result of a conditional search')

var cars = ['Renault', 'Talbot', 'Ford', 'Seat', 'Skoda', 'Daewo', 'Toyota']

console.log('CASE returns cars with name length equal 5 chars')
var car = cars.some(function (car) {
    if (car.length === 5) {
        return car
    }
})
console.log(car)
// true
