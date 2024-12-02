console.log('TEST Array.prototype.includes')

console.log('CASE check if banana is in fruits')

var fruits = ['apple', 'banana', 'cherry']
var hasBanana = fruits.includes('banana')
console.log(hasBanana)
// true

console.log('CASE check if 50 is in numbers')

var numbers = [10, 20, 30, 40]
var hasFifty = numbers.includes(50)
console.log(hasFifty)
// false


console.log('TEST Array.prototype.includes')

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
