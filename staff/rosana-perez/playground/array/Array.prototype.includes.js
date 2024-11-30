console.log('TEST Array.prototype.includes')

console.log('CASE check cars includes ferrari')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('ferrari')
console.log(contains)
//expected result -> false

console.log('CASE check cars includes fiesta')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('fiesta')
console.log(contains)
//expected result -> true
