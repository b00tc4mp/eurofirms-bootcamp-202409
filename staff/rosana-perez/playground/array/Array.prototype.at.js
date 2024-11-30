console.log('TEST Array.prototype.at')

console.log('CASE get element at index 2')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined, function () { return 'hello world' }]
var element = things.at(2)
console.log(element)
// expected result -> 'hola mundo'

console.log('CASE get element at index 3')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined, function () { return 'hello world' }]
var element = things.at(3)
console.log(element)
// expected result -> { a: 1, b: 2, c: 3 }

console.log('CASE get element at offset -1')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined, function () { return 'hello world' }]
var element = things.at(-1)
console.log(element)
//expected result -> function() {return 'hello world'}
console.log(element()) // devuelve el resultado de la función, no la función, incoporando ()
//expected result -> hello world

console.log('CASE get element at offset -3')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined, function () { return 'hello world' }]
var element = things.at(-3)
console.log(element)
//expected result -> null


console.log('CASE get element at 1000')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined, function () { return 'hello world' }]
var element = things.at(1000)
console.log(element)
//expected result -> undefined -> no existe la posición