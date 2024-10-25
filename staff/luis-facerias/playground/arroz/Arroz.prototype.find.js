// ARROZ.PROTOTYPE.FIND

// Implementation of the Arroz function find
// returns the first result of a conditional search function

var Arroz = function () { this.length = 0 }

Arroz.prototype.find = function (callback) {
    for (var i = 0; i < this.length; i++){
        var element = this[i]

        //var carFound = callback(element)

        //if (carFound) return element

        if (callback(element)) return element    // If the function returns true, the loop stops and returns the element
    }
}

// Check if find returns the first result of a conditional search
console.log('CASE returns the first result of a conditional search')

var cars = new Arroz
cars[0] = 'Renault'
cars[1] = 'Talbot'
cars[2] = 'Ford'
cars[3] = 'Seat'
cars[4] = 'Skoda'
cars[5] = 'Daewo'
cars[6] = 'Toyota'
cars.length = 7
var car = cars.find(function (car) {
    return car.startsWith('S')
})
console.log(car)
// Seat


console.log('CASE returns the first result of car with k its name')
var car = cars.find(function (car) {
    return car.includes('k')
})
console.log(car)
// Skoda