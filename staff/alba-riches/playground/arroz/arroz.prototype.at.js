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
// function () { return 'hello world' } // posición -1 empezando por el final que te devuelve ‘ hola mundo’
console.log(element())
// hello world

console.log('CASE get element at 3');

var ropa = new Arroz();
ropa[0] = 'falda';
ropa[1] = 'camiseta';
ropa[2] = 'vestido';
ropa[3] = 'pantalones';
ropa[4] = 'zapatos';
ropa[5] = function () { return 'camiseta'; };
ropa.length = 6;

var element = ropa.at(3);
console.log(element);

// pantalones

console.log('CASE get element at 5')

var ropa = new Arroz()
ropa[0] = 'falda';
ropa[1] = 'camiseta';
ropa[2] = 'vestido';
ropa[3] = 'pantalones';
ropa[4] = 'zapatos';
ropa[5] = function () { return 'camiseta' }
ropa.length = 6;

var element = ropa.at(5);
console.log(element);
// camiseta,
// Te busca camiseta independientemente de la posición que ocupe.

console.log('CASE get element at -2')

var ropa = new Arroz()
ropa[0] = 'falda';
ropa[1] = 'camiseta';
ropa[2] = 'vestido';
ropa[3] = 'pantalones';
ropa[4] = 'zapatos';
ropa[5] = function () { return 'camiseta' }
ropa.length = 6
var element = ropa.at(-2)// empieza desde el final a contar
console.log(element)
// zapatos
