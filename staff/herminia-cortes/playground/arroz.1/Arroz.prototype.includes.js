var Arroz = function () { this.length = 0 }

Arroz.prototype.includes = function (searchElement, fromIndex) {
    for (var i = (fromIndex === undefined ? 0 : fronindex); i < this.length; i++) {
        var element = this[i]

        if (element === searchElement) return true
    }
   
    return false
}

console.log('TEST Arroz.prototype.includes')

console.log('CASE check cars includes ferrari')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars.length = 4
var contains = cars.includes('ferrari')
console.log(contains)
//false

console.log('CASE check cars includes fiesta')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars.length = 4
var contains = cars.includes('fiesta')
console.log(contains)
// true

console.log('CASE check cars includes lambo from index 1')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars.length = 5
var contains = cars.includes('fiesta')
console.log(contains)
// true

console.log('CASE check cars includes lambo from index 1')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars.length = 5
var contains = cars.includes('lambo, 1')
console.log(contains)
// false

console.log('CASE check cars includes lambo from indes 1 (2)')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars[5] = 'lambo'
cars.length = 6
var contains = cars.includes('lambo', 1)
console.log(contains)
//true

//TODO add negative indes(offset) tes case




//ejem exercici:

var Arroz = function () {this.length = 0}

Arroz.prototype.includes = function (searchElement, fromIndex) {
    for (var i = (fromIndex === undefined ? 0 : fromIndex); i < this.length; i++) {
        var Element = this[i]

        if (element === searchElement) return true
    }
    return false
}

console.log('TEST Arroz.prototype.includes')

console.log('CASE check fruits includes appel')

var fruits = new Arroz
fruits[0] = 'peach'
fruits[1] = 'watermelon'
fruits[2] = 'orange'
fruits[3] = 'pineapple'
fruits.length = 4
var contains = fruits.includes('appel')
console.log(contains)
//false

console.log('TEST Arroz.prototype.includes')

console.log('CASE check cars includes lambo')

var cars = new Arroz 
cars[0] = 'cinquecento'
cars[1] = 'fiesta'
cars[2] = 'lambo'
cars[3] = 'ferrari'
cars[4] = 'm5'
cars.length = 5
var contains = cars.includes('lambo')
console.log(contains)
// true




