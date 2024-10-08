/* El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda */

console.log('TEST Array.prototype.includes')

console.log('CASE check cars includes ferrari')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('ferrari')
console.log(contains)
// false 

console.log('CASE check cars includes fiesta')
var cars = ['lamgo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('fiesta')
console.log(contains)
// true

console.log('CASE check cars includes lambo from index 1')
var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('lamgo', 1)
console.log(contains)
// false

