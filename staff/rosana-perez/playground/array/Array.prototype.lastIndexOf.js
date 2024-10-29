console.log('TEST Array.prototype.lastIndexOf')

/* El método lastIndexOf() devuelve el último índice en el que un cierto elemento
puede encontrarse en el arreglo, ó -1 si el elemento no se encontrara. 
El arreglo es recorrido en sentido contrario, empezando por el índice fromIndex.*/

console.log('CASE 1 -> last index of cities: Barcelona')

var cities = ['Vigo', 'Madrid', 'Barcelona', 'A Coruña', 'Leon', 'Barcelona', 'Vigo']

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