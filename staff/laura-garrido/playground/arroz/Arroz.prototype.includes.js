var Arroz = function () { this.length = 0 }

Arroz.prototype.includes = function (searchElement, fromIndex) {
    for (var i = (fromIndex === undefined ? 0 : fromIndex); i < this.length; i++) {
        var element = this[i]

        if (element === searchElement) return true
    }

    return false
}

console.log('TEST arroz.prototype.includes')

console.log('CASE check plants includes tomato')

var plants = new Arroz()
plants[0] = "broccoli"
plants[1] = "cauliflower"
plants[2] = "cabbage"
plants[3] = "kale"
plants[4] = "tomato"
plants.length = 5

var includesPlants = plants.includes('tomato')
console.log(includesPlants)
// true

console.log('CASE check friends includes Pepe')

var friends = new Arroz()
friends[0] = "Pedro"
friends[1] = "Silvia"
friends[2] = "Laura"
friends[3] = "Maria"
friends.length = 4

var includesFriends = friends.includes('Pepe')
console.log(includesFriends)
// false

console.log('CASE check cars includes ferrari')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars.length = 4
var contains = cars.includes('ferrari')
console.log(contains)
// false

console.log('CASE check cars includes fiesta')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars.length = 4
var contains = cars.includes('fiesta')
console.log(contains)
// true

console.log('CASE check cars includes fiesta (2)')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars.length = 5
var contains = cars.includes('fiesta')
console.log(contains)
// true

console.log('CASE check cars includes lambo from index 1')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars.length = 5
var contains = cars.includes('lambo', 1)
console.log(contains)
// false

console.log('CASE check cars includes lambo from index 1 (2)')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars[5] = 'lambo'
cars.length = 6
var contains = cars.includes('lambo', 1)
console.log(contains)
// true

// TODO add negative index (offset) test case

console.log('CASE check cars includes lambo from offset -1')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars.length = 5
var contains = cars.includes('lambo', -1)
console.log(contains)
// true

console.log('CASE check cars includes lambo from offset -1 (2)')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars[5] = 'lambo'
cars.length = 6
var contains = cars.includes('lambo', -1)
console.log(contains)
// true