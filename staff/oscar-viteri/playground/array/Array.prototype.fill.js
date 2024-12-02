console.log('TEST Array.prototype.fill')

console.log('CASE fill the element of the array from 2 to 4')

var country = ['España', 'Mexico', 'Argentina', 'Francia', 'Japon']
var world = 'Italia'
console.log(country.fill(world, 2, 4))
//[ 'España', 'Mexico', 'Italia', 'Italia', 'Japon' ]

console.log('CASE fill the element of the array from 1 to 3')

var country = ['España', 'Mexico', 'Argentina', 'Francia', 'Japon']
var world = 'España'
console.log(country.fill(world, 1, 3))
//[ 'España', 'España', 'España', 'Francia', 'Japon' ]

console.log('CASE fill the element of the array -1')

var country = ['España', 'Mexico', 'Argentina', 'Francia', 'Japon']
var world = 'Japon'
console.log(country.fill(world, -3, -1))
//[ 'España', 'Mexico', 'Japon', 'Japon', 'Japon' ]