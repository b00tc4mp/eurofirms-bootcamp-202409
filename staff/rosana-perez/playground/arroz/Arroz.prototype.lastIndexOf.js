console.log('TEST Arroz.prototype.lastIndexOf')

/* El método lastIndexOf() devuelve el último índice en el que un cierto elemento
puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara.
El arreglo es recorrido en sentido contrario, empezando por el índice fromIndex.*/

var Arroz = function () { this.length = 0 }

Arroz.prototype.lastIndexOf = function (elementTosearch) {
    // debe recorrer la arroz elemento a elemento
    // comprobar la última posición -> index <- de cada elemento
    // devolver la posición -> index <-
    // devolver -1 si no hay elemento

    for (var i = this.length; i >= 0; i--) {
        if (this[i] === elementTosearch)
            return i
    }
    return -1

}

console.log('CASE 1 -> last index of cities: Barcelona')

var cities = new Arroz
cities[0] = 'Vigo'
cities[1] = 'Madrid'
cities[2] = 'Barcelona'
cities[3] = 'A Coruña'
cities[4] = 'Leon'
cities[5] = 'Barcelona'
cities[6] = 'Vigo'
cities.length = 7

var lastIndexOfBarcelona = cities.lastIndexOf('Barcelona')

console.log('The last index of Barcelona is -> ', lastIndexOfBarcelona)
// 5

console.log('CASE 2 -> last index of cities: Vigo')

var lastIndexOfVigo = cities.lastIndexOf('Vigo')

console.log('The last index of Vigo is -> ', lastIndexOfVigo)
// 6


console.log('CASE 3 -> last index of cities not found: Oviedo')

var lastIndexOfOviedo = cities.lastIndexOf('Oviedo')

console.log('The last index of Oviedo is -> ', lastIndexOfOviedo)
// -1 -> no hay ningún elemento con ese nombre
