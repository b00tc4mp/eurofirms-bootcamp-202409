// ARROZ.PROTOTYTPE.REVERSE


// Implementation of the Arroz function reverse,
// returns an array with elements in reverse order

var Arroz = function() { this.length = 0 }

Arroz.prototype.reverse = function () {
    reversed = []
    for (var i = 0; i < this.length; i++){
        this[i].length === 0 ? this[i] = '<1 empty item>': this[i]
        reversed[this.length - 1 - i] = this[i]
    }
    return reversed
}

console.log('TEST Arroz.prototype.reverse')
console.log('CASE returns an array with elements in reverse order')

var cars = new Arroz
cars[0] = 'Renault'
cars[1] = 'Tata'
cars[2] = 'Simca'
cars[3] = 'Talbot'
cars[4] = 'Tesla'
cars.length = 5
var element = cars.reverse()
console.log(element)


console.log('CASE returns an reversed array with some empty elements')

var cars = new Arroz
cars[0] = 'Renault'
cars[1] = 'Tata'
cars[2] = 'Simca'
cars[3] = ''
cars[4] = 'Tesla'
cars.length = 5
var element = cars.reverse()
console.log(element)