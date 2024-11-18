console.log( 'TEST Array.prototype.includes')

console.log('CASE check cars includes ferrari')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('ferrari')
console.log(contains)
//false

console.log('CASE check cars includes fiesta')

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('fiesta')
console.log(contains)
// true

console.log('CASE check cars includes lambo from index')
    
var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('lambo', 1)
console.log(contains)
//false

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('fiesta', -6)
//false


var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('fiesta', -1)
//false

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('m5', -1)
//true

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('m5', -1)
//true

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contins = cars.includes('m5', -2)
//true

var cars = ['lambo', 'cinquecento', 'fiesta', 'm5']
var contains = cars.includes('limbo', -2)
//false

//TODO add negative index (offset) test case///The lines from 24 untill 31 new examples.


var array1 = [10, 11, 12, 13, 14];

console.log(array1.includes(11));
//La respuesta esperada: true

var pets = ['horse', 'goat', 'cow', 'pork'];

console.log(pets.includes('cow'));
//La respuesta esperada: true

console.log(pets.includes('dog'));
//La respuesta esperada: false

