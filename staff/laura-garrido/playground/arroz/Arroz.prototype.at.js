var Arroz = function () { this.length = 0 }

Arroz.prototype.at = function (index) {
    if (index > -1)
        return this[index]
    else
        return this[this.length + index]
}

console.log('TEST arroz.prototype.at')

console.log('CASE get element at offset -1')

var plants = new Arroz()
plants[0] = "broccoli"
plants[1] = "cauliflower"
plants[2] = "cabbage"
plants[3] = "kale"
plants[4] = "tomato"
plants.length = 5

var atPlants = plants.at(-1)
console.log(atPlants)
// "tomato"

console.log('CASE get element at offset -1')

var friends = new Arroz()
friends[0] = "Pedro"
friends[1] = "Silvia"
friends[2] = "Laura"
friends[3] = "Maria"
friends.length = 4

var atFriends = friends.at(-1)
console.log(atFriends)
// "Maria"

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
// { a: 1, b: 2, c: 3 }

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
// function () { return 'hello world' }
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
// null

console.log('CASE get element at 1000')

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

console.log('CASE get element at -1000')

var things = new Arroz
things[0] = 100
things[1] = true
things[2] = 'hola mundo'
things[3] = { a: 1, b: 2, c: 3 }
things[4] = null
things[5] = undefined
things[6] = function () { return 'hello world' }
things.length = 7
var element = things.at(-1000)
console.log(element)
// undefined
