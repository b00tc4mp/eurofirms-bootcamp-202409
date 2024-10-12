console.log('TEST array.prototype.includes')

console.log('CASE return true or false if "tomato" it is on plants')

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
var includesPlants = plants.includes('tomato')
console.log(includesPlants)
// true

console.log('CASE return true or false if "Pepe" its on friends')

var friends = ['Pedro', 'Silvia', 'Laura', 'Maria']
var includesFriends = friends.includes('Pepe')
console.log(includesFriends)
// false

console.log('CASE check cars includes ferrari')
var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('ferrari')
console.log(contains)
// false

console.log('CASE check cars includes fiesta')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('fiesta')
console.log(contains)
// true

console.log('CASE check cars includes lambo from index 1')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('lambo', 1)
console.log(contains)
// false

// TODO add negative index (offset) test case

console.log('CASE check cars includes lambo from offset -1')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('lambo', -1)
console.log(contains)
// false

console.log('CASE check cars includes cinquecento from offset -3')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('cinquecento', -3)
console.log(contains)
// true