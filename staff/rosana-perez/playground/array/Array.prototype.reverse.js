console.log('TEST Array.prototype.reverse.js')

// El método reverse() invierte el orden de los elementos de un array in place.
// El primer elemento pasa a ser el último
// y el último pasa a ser el primero.
// devuelve el Array invertido

console.log('CASE 1 -> Obtaining days of week reversed')

var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

var daysReversed = daysOfWeek.reverse()

console.log(daysOfWeek)
// ['Sunday', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday']

console.log('CASE 2 -> Obtaining seasons of the year reversed on two-dimensional array elements')

var seasons = [
    ['Spring', 'Summer'],
    ['Outumn', 'Winter']
]

var seasonsReversed = seasons.reverse()

console.log(seasons)
// ['Outumn', 'Winter']
// ['Spring', 'Summer']
