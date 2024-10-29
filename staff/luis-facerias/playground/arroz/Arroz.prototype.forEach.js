// ARROZ.PROTOTYPE.FOREACH

// Implementation of the Arroz function forEach
// returns a function result for each array element

var Arroz = function () { this.length = 0 }

Arroz.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++){
        var element = this[i]

        callback(element)
    }
}

// Check if forEach returns cars started with S
console.log('CASE cars started with S')

var cars = new Arroz
cars[0] = 'Renault'
cars[1] = 'Talbot'
cars[2] = 'Ford'
cars[3] = 'Seat'
cars[4] = 'Skoda'
cars[5] = 'Daewo'
cars[6] = 'Toyota'
cars.length = 7

cars.forEach(function (car) {
    car.startsWith('S') ? console.log(car) : false
})
// Seat
// Skoda


// Check if forEach returns car with 5 chars
console.log('CASE cars with 5 chars')
cars.forEach(function (car) {
    car.length === 5 ? console.log(car) : false
})
// Skoda
// Daewo