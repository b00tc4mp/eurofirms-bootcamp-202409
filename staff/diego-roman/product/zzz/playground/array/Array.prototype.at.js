console.log('TEST Array.prototype.at')

console.log('CASE access second item in fruits')

var fruit = ['apple', 'banana', 'cherry']
var secondItem = fruits.at(1)
console.log(secondItem)
// 'banana'

console.log('CASE access last item in numbers')

var numbers =[10, 20, 30, 40]
var lastItems = numbers.at(-1)
console.log(lastItem)
//40

console.log('TEST Array.prototype.at')

console.log('CASE get element at index 2')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined, function () { return 'hello world' }]
var element = things.at(2)
console.log(element)
// hola mundo

console.log('CASE get element at index 3')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined, function () { return 'hello world' }]
var element = things.at(3)
console.log(element)
// { a: 1, b: 2, c: 3 }

console.log('CASE get element at offset -1')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined, function () { return 'hello world' }]
var element = things.at(-1)
console.log(element)
// function () { return 'hello world' }
console.log(element())
// hello world

console.log('CASE get element at offset -3')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined, function () { return 'hello world' }]
var element = things.at(-3)
console.log(element)
// null

console.log('CASE get element at 1000')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined, function () { return 'hello world' }]
var element = things.at(1000)
console.log(element)
// undefined

console.log('CASE get element at -1000')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined, function () { return 'hello world' }]
var element = things.at(-1000)
console.log(element)
// undefined
