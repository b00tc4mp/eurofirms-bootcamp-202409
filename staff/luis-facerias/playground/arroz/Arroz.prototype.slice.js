
// ARROZ.PROTOTYTPE.SLICE


// Implementation of the Arroz function slice,
// returns a portion of an array into a new array

var Arroz = function () { this.length = 0 }

Arroz.prototype.slice = function ( start, end ) {
    new_array = []
    if ( start < 0 ) {
        for (var i = this.length + start; i < this.length; i++ ) {
            new_array.push(this[i])
        }
        return new_array
    }else{
        console.log('Por allá')
        end === undefined || end > this.length ? end = this.length : end
        for (var i = start; i < end; i++ ){
            new_array.push(this[i])
        }
        return new_array
    }

}

var cars = new Arroz
cars[0] = 'Renault'
cars[1] = 'Talbot'
cars[2] = 'Ford'
cars[3] = 'Seat'
cars[4] = 'Skoda'
cars[5] = 'Daewo'
cars[6] = 'Mercedes'
cars[7] = 'Toyota'
cars.length = 8

console.log('TEST Arroz.prototype.slice')
console.log('CASE returns a potion of an array into a new array between start and end')
var element = cars.slice(1, 4)
console.log(element)



console.log('CASE returns a potion of an array into a new array starting by end')
var element = cars.slice(-3)
console.log(element)
// [ 'Daewo', 'Mercedes', 'Toyota' ]





