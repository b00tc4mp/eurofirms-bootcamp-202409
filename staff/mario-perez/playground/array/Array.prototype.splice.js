console.log('TEST Array.prototype.splice')

// El método splice() cambia el contenido de un array eliminando elementos existentes 
// y / o agregando nuevos elementos.
// 3 parametros

console.log('CASE add an element at index 2')

var things = [100, true, 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined,
    function () { return 'hello world' }]
var element = things.splice(2, 0, 'P')

console.log(things)
//[100, true, 'P', 'hola mundo', { a: 1, b: 2, c: 3 }, null, undefined, function () { return 'hello world' }]