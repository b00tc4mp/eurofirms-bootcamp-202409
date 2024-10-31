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


// TODO add negative index (offser) test case

console.log('CASE check cars includes fiesta from index -2')
var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('fiesta', -2)
console.log(contains)
// true

console.log('CASE check cars includes cinquecento from index -2')
var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('cinquecento', -2)
console.log(contains)
// false

console.log('CASE check cars includes cinquecento from index -3')
var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('cinquecento', -3)
console.log(contains)
// true
