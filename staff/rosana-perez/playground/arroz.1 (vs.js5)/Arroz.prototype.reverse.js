console.log('TEST Arroz.prototype.reverse.js')
// El método reverse() invierte el orden de los elementos de un array in place.
// El primer elemento pasa a ser el último y el último pasa a ser el primero.
// devuelve el Array invertido

var Arroz = function () { this.length = 0 }

Arroz.prototype.reverse = function (reversion) {
    //invierte el orden de cada elemento -> this[i]
    // el primero pasa a ser el último, y el último el primero
    // devuelve el array -> result <-

    var result = new Arroz // nuevo Arroz para los elementos invertidos

    for (var i = this.length - 1; i >= 0; i--) {

        var element = this[i]

        if (reversion) {
            result[result.length] = reversion(element);
        } else {
            result[result.length] = element// element is -> this[i] <-
            // function on each element
        }
        result.length++

    }
    return result
}

var numbers = new Arroz
numbers[0] = 0
numbers[1] = 1
numbers[2] = 2
numbers.length = 3

var numbersReversed = numbers.reverse()

console.log('CASE 1 -> numbers reversed', numbersReversed)

//guardar el valor de la 1ª posición
//recorrer el arroz desde el último valor y darle la 1ª posición
//asignar el valor de la primera posición a la última posición

/*

this[i] = this.length - this[i+1]  ?

this[0] = 3 - 1 = 2
this[1] = 3 - 2 = 1
this[2] = 3 - 3 = 0
*/

console.log('CASE 2 -> Obtaining days of week reversed')

var daysOfWeek = new Arroz
daysOfWeek[0] = 'Monday'
daysOfWeek[1] = 'Tuesday'
daysOfWeek[2] = 'Wednesday'
daysOfWeek[3] = 'Thursday'
daysOfWeek[4] = 'Friday'
daysOfWeek[5] = 'Saturday'
daysOfWeek[6] = 'Sunday'
daysOfWeek.length = 7

var daysReversed = daysOfWeek.reverse()

console.log('Days of week reversed -> ', daysReversed)
// ['Sunday', 'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday']


console.log('CASE 3 -> Obtaining seasons of the year reversed on two-dimensional array elements')

var seasons = new Arroz
seasons[0] = ['Spring', 'Summer']
seasons[1] = ['Outumn', 'Winter']
seasons.length = 2


var seasonsReversed = seasons.reverse()

console.log('Seasons reversed -> ', seasonsReversed)
// ['Outumn', 'Winter']
// ['Spring', 'Summer']


