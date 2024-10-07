console.log('TEST Array.prototype.includes')

console.log('CASE check colors encludes black')

var colors = ['red', 'green', 'blue', 'yellow'];
var color = ['black'];
console.log('colors->', colors)
// ['red', 'green', 'blue', 'yellow']
console.log('color para agregar->', color)
// ['black']
console.log('CASE se unen dos arrays')

var colorsToCheck = colors.concat(color);
console.log(colorsToCheck);
// ['red', 'green', 'blue', 'yellow', 'black']

console.log('if it was found true->', colorsToCheck.includes('yellow'));
//true
console.log('if it was not found false->', colorsToCheck.includes(1, 1))
//false

console.log('CASE check colors includes blue')

var colors = ['red', 'green', 'blue', 'yellow', 'black']
var contains = colors.includes('blue')
console.log('if it was found true->', contains)
//true

console.log('CASE check colors includes red from index 1')

var colors = ['red', 'green', 'blue', 'yellow', 'black']
var contains = colors.includes('red', 1)
console.log('if it was not found false->', contains)
// false

console.log('CASE check color includes black from index -1')

var colors = ['red', 'green', 'blue', 'yellow', 'black']
var contains = colors.includes('black', -1)
console.log('if it was not found true->', contains)
// true