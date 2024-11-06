var Arroz = function () { this.length = 0 }

Arroz.prototype.includes = function (searchElement) {
   /* 
Encontrar 'searchElement' en este Arroz, iterando por cada elemento comprobando 
si ese elemento es igual al 'searchElement', devolver true si es igual, o devolver false
si no hemos encontrado el 'searchElement'
*/


for(var i = 0; i < this.length; i++) {
    var element = this[i]

    if (element === searchElement) return true
}

return false
}

console.log('TEST Arroz.prototype.includes')

console.log('CASE check cars includes ferrari')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars.length = 4
var contains = cars.includes('ferrari')
console.log(contains)
// false

console.log('CASE check cars includes fiesta')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars.length = 4
var contains = cars.includes('fiesta')
console.log(contains)
//true

console.log('CASE check cars includes fiesta (2)')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars[4] = 'fiesta'
cars.length = 5
var contains = cars.includes('fiesta')
console.log(contains)
// true

/* mi ejemplo */

console.log('CASE check colors includes white')

var colors = new Arroz
colors[0] = 'red'
colors[1] = 'yellow'
colors[2] = 'green'
colors[3] = 'white'
colors.length = 4
var contains = colors.includes('white')
console.log(contains)
// true