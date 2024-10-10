var Arroz = function () { this.length = 0 }

Arroz.prototype.includes = function (searchElement) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (element === searchElement) return true
    }

    return false
}

/* buscar search  dentro del arroz.
iterar element por element del arroz para comprobar si element es iagual a searchElement.
si element es igual a searchElement, devolver true.
si no hemos encontrado el searchElement, devovler false.

En es caso de abajo: 
- element = lambo, cinquecento, fiesta y m5
- searchElement = "ferrari"
- i = la posición
- this[i] = este arroz (el de cars)
*/


console.log('TEST Arroz.prototype.includes')

console.log('CASE check cars includes ferrari')

var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars.lenght = 4
var contains = cars.includes('ferrari')
console.log(contains)
// false

console.log('CASE check cars includes fiesta')
var cars = new Arroz
cars[0] = 'lambo'
cars[1] = 'cinquecento'
cars[2] = 'fiesta'
cars[3] = 'm5'
cars.lenght = 4
var contains = cars.includes('fiesta')
console.log(contains)
// true

