console.log('TEST Array.prototype.push');

console.log('CASE add 400 to nums');

var nums = [100, 200, 300];
var length = nums.push(400);
console.log(nums);
// [100, 200, 300, 400] (4)
console.log(length)
// 4



console.log('CASE add F to chars');

var chars = ['A', 'B', 'C', 'D', 'E'];
var length = chars.push('F');
console.log(chars);
// ['A', 'B', 'C', 'C', 'E', 'F'] (6)
console.log(lenght);
// 6

console.log('CASE add many elements in one call')

var colors = ['red', 'green', 'blue', 'magenta']
var length = colors.push('cyan', 'yellow', 'orange', 'pink')
console.log(colors)
// ['red'. 'green', 'blue', 'magenta', 'cyan', 'yellow', 'orange', 'pink,]
console.log(length)
// 8

// a partir de abajo lo he hecho yo

console.log('TEST Array.prototype.push')

console.log('CASO añadir leopardo al zoo')

var zoo = ['elefante', 'leon', 'lobo', 'oso']
var length = zoo.push('leopardo')
console.log(zoo)
console.log(length)


console.log('CASO añadir mas coches al garaje')

var garaje = ['citroen', 'audi', 'bmw', 'opel']
var lenght = garaje.push('opel', 'porch', 'mercedes')
console.log(garaje)
console.log(lenght)


