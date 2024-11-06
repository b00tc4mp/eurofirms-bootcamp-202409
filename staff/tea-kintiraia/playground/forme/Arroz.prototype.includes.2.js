var Arroz = function () { this.length = 0 }

Arroz.prototype.includes = function (searchElement, fromIndex) {
    if (fromIndex === undefined) {
        /*
        1. Encontrar searchElement dentro del arroz;
        2. Comprobar si el elemento es igual al searchElement, por uno por uno;
        3. Si el elemento es igual al searchElement, devolver 'true';
        4. Si no se encuentra el searchElement, devolver 'false'.
        */

        for (var i = 0; i < this.length; i++) {
            var element = this[i]

            if (element === searchElement) return true
        }

        return false
    } else {
        for (var i = fromIndex; i < this.length; i++) {
            var element = this[i]

            if (element === searchElement) return true
        }

        return false
    }

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

/* mi ejemplo-----> */

console.log('CASE check fruits includes limon')

var fruits = new Arroz
fruits[0] = 'melon'
fruits[1] = 'coconut'
fruits[2] = 'grapes'
fruits[3] = 'apple'
fruits.length = 4
var contains = fruits.includes('limon')
console.log(contains)
// false