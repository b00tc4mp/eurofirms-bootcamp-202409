// ARROZ.PROTOTYTPE.AT


// Implementation of the Arroz function at
// return index value

var Arroz = function () { this.length = 0 }

Arroz.prototype.at = function (index) {
    if (index >= 0)
        return this[index]
    else
        return this[this.length + index]
}

// Test with a values array
console.log('TEST Arroz.prototype.at')
console.log('CASE get element at index 2')

var cars = new Arroz
cars[0] = 'SEAT'
cars[1] = 'RENAULT'
cars[2] = 'KIA'
cars[3] = 'PEUGEOT'
cars.length = 4
var element = cars.at(2)
console.log(element)
// KIA


console.log('CASE get element at index -3')

var cars = new Arroz
cars[0] = 'SEAT'
cars[1] = 'RENAULT'
cars[2] = 'KIA'
cars[3] = 'PEUGEOT'
cars.length = 4
var element = cars.at(-3)
console.log(element)
// RENAULT
