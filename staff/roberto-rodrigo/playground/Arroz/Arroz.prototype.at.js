var Arroz = function () { this.length = 0 }

Arroz.prototype.at = function (index) {
    if (index > -1)
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
var element = things.at(2)
console.log(element)
// {a: 1, b: 2, c: 3}