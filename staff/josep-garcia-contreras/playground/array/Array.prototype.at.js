console.log('TEST Array.prototype.at')

console.log('CASE get element index 2')

var things = [100, 'hello', true, 'Hola mundo',{a:1, b:2, c:3}, null, undefined, function(){return'Hello world'}]

var element = things.at (2)

console.log(element)
// Devuelve la posicion 2 -> true

console.log('CASE get element index -2')

var things = [100, 'hello', true, 'Hola mundo',{a:1, b:2, c:3}, null, undefined, function(){return'Hello world'}]

var element = things.at (-2)

console.log(element)
//  Devuelve la posicion -2 -> undefined    
