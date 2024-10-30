console.log('TEST Array.prototype.shift')

/* El método shift() elimina el primer elemento del array y lo retorna.
   Este método modifica la longitud del array.
   El método shift elimina el elemento en el índice cero y desplaza 
   los valores consecutivos hacia abajo, devolviendo el valor eliminado. 
   Si la propiedad length es 0, devuelve undefined. */

console.log('CASE 1 -> Testing method shift with the list of week days')

var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

console.log('Days of week before apply shift -> ', daysOfWeek)
// ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// length is 7

var elementRemoved = daysOfWeek.shift()

console.log('Element removed in shift method -> ', elementRemoved)
// Monday

console.log('Days of week after apply shift method -> ', daysOfWeek)

// ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// length is 6

console.log('CASE 2 -> Testing method shift with a two-dimensional Array')

var days = [
    ['Monday', 'Tuesday'],
    ['Wednesday', 'Thursday'],
    ['Friday', 'Saturday'],
    ['Sunday']
]

console.log('Days of week before apply shift -> ', days)
// ['Monday', 'Tuesday'], ['Wednesday', 'Thursday'], ['Friday', 'Saturday'], ['Sunday']
// length is 7

var elementRemovedArr = days.shift()

console.log('Elements removed from Array -> ', elementRemovedArr);
// ['Monday', 'Tuesday']

console.log('Array returned after apply shift method -> ', days);
/*  ['Wednesday', 'Thursday'],
    ['Friday', 'Saturday'],
    ['Sunday']
*/
