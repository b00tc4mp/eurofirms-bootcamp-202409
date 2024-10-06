console.log('TEST Array.prototype.at')
console.log('CASE get element at index 2')

var colors = ['red', 'white', 'black', 'green', 'blue', 'yellow']

console.log('colors ->' , colors)

console.log('at 3 ->', colors.at('orange'))
//El resultado esperado ['red', 'white', 'black', 'green', 'blue', 'yellow' 'orange']

console.log()

//colors  (6)['red', 'white', 'black', 'green', 'blue', 'yellow']
{

colors[0] = 'red',
colors[1] = 'white',
colors [2] = 'black',
colors [3] = 'green',
colors [4] = 'blue',
colors [5] = 'yellow',
length = 6
}

[[Prototype]] = Array(0)
 //5 at 3 -> red

 // copia del ejemplo 5/10


 console.log('TEST Array.prototype.at')

console.log('CASE get element at index 2')

var things = [100, true, 'hola mundo', {a: 1, b: 2, c: 3}, null, undefined, function () {return 'hello world'}]
var element = things.at(2)
console.log(element)
//hola mundo

console.log('CASE get element at index 3')

var things = [100, true, 'hola mundo', {a: 1, b: 2, c: 3}, null, undefined, function() {return 'hello world'}]
var elements = things.at(3)
console.log(element)
// { a:1, b:2, c:3}

console.log('CASE get element at offset -1')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined, function () { return 'hello world' }]
var element = thigs.at(-3)
console.log(element)
//function () {return 'hello world'}
console.log(element())

//hello world
console.log('CASE get element at offset -3')

var things = [100, true, 'hola mundo', {a: 1, b:2, c:3}, null, underfined, function () { return 'hello world'} ]
var element = things.at(-3)
console.log(element)
// null

console.log('CASE get element at 1000')

var things = [100, true, 'hola mundo', {a:1, b:2, c:3}, null, underfined, function () {return 'hello world'} ]
var elements = things.at(1000)
console.log(element)
//underfined

console.log('CASE get element at -1000')

var things = [100, true, 'hola mundo', {a:1, b:2, c:3}, null, underfined, function () {return ' hello mundo'}]
var element = things.at(-1000)
console.log(element)
//underfined