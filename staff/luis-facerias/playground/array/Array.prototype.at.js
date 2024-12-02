// ARRAY.PROTOTYTPE.INCLUDES

// The at method of the Array function
// returns the value of the entered index

console.log('TEST Array.prototype.at')


// Check if the ferrary is included in the array
console.log('CASE get element at entered index')

var things = ['Hola mundo', true, {a: 1, b:2, c:5 }, null, function () { return 'hello Luis' }]
var element = things.at(2)
console.log(element)
// { a: 1, b: 2, c: 5 }


console.log('CASE get element at offset -1')
var things = ['Hola mundo', true, {a: 1, b:2, c:5 }, null, function () { return 'hello Luis' }]
var element = things.at(-1)
console.log(element)
//  function () { return 'hello Luis' }
console.log(element())