Arroz.prototype.at = function(index) {
    if (index < 0) index = this.length + index
    return this[index]
}

console.log('TEST Arroz.prototype.at')

var fruits = new Arroz
fruits[0] = 'apple'
fruits[1] = 'banana'
fruits[2] = 'cherry'
fruits.length = 3
var secondItem = fruits.at(1)
console.log(secondItem)
// 'banana'

var numbers = new Arroz
numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers.length = 4
var lastItem =numbers.at(-1)
console.log(lastItem)
// 40


var Arroz = function () { this.length = 0 }

Arroz.prototype.at = function (index) {
    if (index > -1) // index > -1
        return this[index]
    else
        return this[this.length + index]
}

console.log('TEST Arroz.prototype.at')

console.log('CASE get element at index 2')

var things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
var element = things.at(2)
console.log(element)
// hola mundo

console.log('CASE get element at index 3')

var things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
var element = things.at(3)
console.log(element)
// { a: 1, b: 2, c: 3 }

console.log('CASE get element at offset -1')

var things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
var element = things.at(-1)
console.log(element)
// function () { return 'hello world' }
console.log(element())
// hello world

console.log('CASE get element at offset -3')

var things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
var element = things.at(-3)
console.log(element)
// null

console.log('CASE get element at 1000')

var things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
var element = things.at(1000)
console.log(element)
// undefined

console.log('CASE get element at -1000')

var things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
var element = things.at(-1000)
console.log(element)
// undefined

