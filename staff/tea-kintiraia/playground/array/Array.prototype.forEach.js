Array.prototype.forEach()
console.log('TEST Array.prototype.forEach')

console.log('CASE multiply each number by itself and print it')

function Arroz() {
    this.length = 0
}

Arroz.prototype.forEach = function (callBack) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        callBack(element)
    }
}





/* 1-El método forEach() ejecuta la función indicada una vez por cada elemento del array. 
2-'forEach()' ejecuta la función callback una vez por cada elemento presente en el array en orden ascendente. No es invocada para índices que han sido eliminados o que no hayan sido inicializados (Ej. sobre arrays sparse)

3-'callback' es invocada con tres argumentos:
a-el valor del elemento; b-el índice del elemento; c-el array que está siendo recorrido.
Si un parámetro 'thisArg' es proporcionado a forEach, será usado como el valor this para cada invocación de callback como si se llamara a callback.call(thisArg, element, index, array). Si thisArg es undefined o null,
 el valor this dentro de la función depende si la función está o no en modo estricto (valor pasado si está en modo estricto, objeto global si está en modo no-estricto).
*/

console.log('describe forEach')

console.log('CASE people')

var people = [{ name: 'Paco', age: 30, origin: 'Madrid' },
{ name: 'Laura', age: 16, origin: 'Sevilla' },
{ name: 'Manolo', age: 25, origin: 'Jaen' },
{ name: 'Lucia', age: 32, origin: 'Cordoba' }]

console.log('CASE get the names')
var getName = function (element) {
    console.log(element.name)
}
people.forEach(getName)
//'Paco, Laura, Manolo, Lucia

console.log('CASE get ages')
people.forEach(element => console.log(element.age))
//'30, 16, 25, 32

console.log('CASE sum 2 to the age')
var sum2 = function (element) {
    element.age = element.age + 2
}
people.forEach(sum2)
console.log(people)
//'32, 18, 27, 34

console.log('CASE get ages of myClassMates')

var people = [{ name: 'Maria', age: 20, origin: 'Paris' },
{ name: 'Brad', age: 24, origin: 'London' },
{ name: 'Mike', age: 18, origin: 'Barselona' },
{ name: 'Leia', age: 22, origin: 'Malaga' }]

console.log('CASE get the names')
var getName = function (element) {
    console.log(element.name)
}
people.forEach(getName)

console.log('CASE get ages')
people.forEach(element => console.log(element.age))
// 20, 24, 18, 22
