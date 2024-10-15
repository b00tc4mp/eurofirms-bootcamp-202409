var Arroz = function () {this.length = 0 }
/* El metodo 'Asignamos al prototipo de arroz la función de 'index', de buscar el valor de una posición y devolverlo, permitiendo valores positivos y negativos.*/
Arroz.prototype.at = function (index) {
    return this[index]
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
things[6] = function() {return 'hello world'}
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
// {a: 1, b: 2, c: 3}

/* 

console.log ('CASE get element at offset -1')

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
//null

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
var element = things.at(-1000')
console.log(element)
// undefined
*/

console.log('TEST Arroz.prototype.at')

console.log('CASE get element at -1')

var moovies = new Arroz
moovies[0] = twilight
moovies[1] = sabrina
moovies[3] = casablanca
moovies[4] = grace
moovies.length = 5
var element = moovies.at(1)
console.log(element)
//sabrina
