console.log('TEST Array.prototype.includes')
console.log('CASE verificar la existencia de un elemento en un array')

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


console.log('CASE verificar la existencia de un elemento en un array')

console.log('si se encontro ->', colorsToCheck.includes('yellow'));
//true
console.log('si no se encontro ->', colorsToCheck.includes(1, 1))
//false

