Arroz.prototype.includes = function(element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === element) return true
    }
    return false
}

console.log('TEST Arroz.prototype.includes')

var fruits = new Arroz
fruits[0] = 'apple'
fruits[1] = 'banana'
fruits[2] = 'cherry'
fruits.length = 3
var hasBanana = fruits.includes('banana')
console.log(hasBanana)
// true

var numbers = new Arroz
numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers.length = 4
var hasFifty = numbers.includes(50)
console.log(hasFifty)
// false


var Arroz = function () { this.length = 0 }

Arroz.prototype.includes = function (searchElement, fromIndex) {
    for (var i = (fromIndex === undefined ? 0 : fromIndex); i < this.length; i++) {
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
// false

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

console.log('CASE check cars includes fiesta (2)')

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
var contains = cars.includes('lambo', 1)
console.log(contains)
// false

console.log('CASE check cars includes lambo from index 1 (2)')

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
// true

// TODO add negative index (offset) test case
