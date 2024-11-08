class Arroz {
    constructor() {
        this.length = 0
    }

    at(index) {
        if (index > -1) // index > -1
            return this[index]
        else
            return this[this.length + index]
    }
}

console.log('TEST Arroz.prototype.at')

console.log('CASE get element at index 2')

{
    const things = new Arroz
    things[0] = 100
    things[1] = true
    things[2] = 'hola mundo'
    things[3] = { a: 1, b: 2, c: 3 }
    things[4] = null
    things[5] = undefined
    things[6] = function () { return 'hello world' }
    things.length = 7
    const element = things.at(2)
    console.log(element)
    //hola mundo
}

console.log('CASE get element at index 3')

{

var things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
const element = things.at(3)
console.log(element)
// { a: 1, b: 2, c: 3 }
}

console.log('CASE get element at offset -1')

{
const things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
const element = things.at(-1)
console.log(element)
// function () { return 'hello world'}
console.log(element())
// hello world
}

console.log('CASE get element at offset -3')

{
const things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
const element = things.at(-3)
console.log(element)
//null
}

console.log('CASE get element at 1000')

{
const things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
const element = things.at(1000)
console.log(element)
//undefined
}

console.log('CASE get element at -1000')

{
const things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
const element = things.at(-1000)
console.log(element)
//undefined
}