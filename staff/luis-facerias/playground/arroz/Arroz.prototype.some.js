// ARROZ.PROTOTYTPE.SOME


// Implementation of the Arroz function some,
// returns true if an element implemented by the provided function

var Arroz = function () { this.length = 0 }

Arroz.prototype.some = function (callback) {
    for (var i = 0; i < this.length; i++){
        var element = this[i]

        if (callback(element)) return true

    }
    return false
}


console.log('TEST Array.prototype.some')

// Check if some returns true if an element implemented by the provided function
console.log('CASE returns true if found the first result of a conditional search')

var cars = new Arroz
cars[0] = 'Renault'
cars[1] = 'Talbot'
cars[2] = 'Ford'
cars[3] = 'Seat'
cars[4] = 'Skoda'
cars[5] = 'Daewo'
cars[6] = 'Toyota'
cars.length = 7

console.log('Test')
var car = cars.some(function (car) {
    return car.length === 5
})
console.log(car)