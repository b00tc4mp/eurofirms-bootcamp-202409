var Arroz = function () { this.length = 0 }

Arroz.prototype.at = function (index) {
    //retorna un elemento de un array
    //crear un nuevo arroz
    //devolver un valor numerico
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
console.log('at index 2->', element)
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
console.log('at index 3->', element)
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
console.log('at offset -1->', element)
// function () { return 'hello world }
console.log('open function->', element())
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
console.log('at offset -3 ->', element)
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
console.log('at index 1000->', element)
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
console.log('at index -1000 ->', element)
// undefined