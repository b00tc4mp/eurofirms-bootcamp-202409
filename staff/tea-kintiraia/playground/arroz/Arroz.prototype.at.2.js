var Arroz = function () {this.length = 0 }

Arroz.prototype.at = function (index) {
    if (index >= 0)
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
things[3] = {a: 1, b: 2, c: 3}
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world'}
things.length = 7
var element = things.at(2)
console.log(element)
//hola mundo

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
//function () {return 'hello world'}
console.log(element())
//hello world

console.log('CASE get element at index -3')

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

conosole.log('CASE get element at 1000')

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

console.log('CASE element at -1000')

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

 //*mi ejemplo:  

 console.log('CASE element at 5')
 
 var myFood = new Arroz
 myFood[0] = 'chicken';
 myFood[1] = 'butter';
 myFood[2] = 'vegetables';
 myFood[3] = 'fruits';
 myFood[4] = 'pasta';
 myFood[5] = function () { return 'hello world' }
 myFood.length = 6
 var element = myFood.at (5)
 console.log(element)
 // function () { return 'hello world'}
 
console.log('CASE element at -2')

var myFood = new Arroz
myFood[0] = 'chicken';
myFood[1] = 'butter';
myFood[2] = 'vegetables';
myFood[3] = 'fruits';
myFood[4] = 'pasta';
myFood[5] = function () { return 'hello world' }
myFood.length = 6
var element = myFood.at(-2)
console.log(element)
// 'pasta'