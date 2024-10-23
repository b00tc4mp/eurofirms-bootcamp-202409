var Arroz = function () { this.length = 0 }

Arroz.prototype.shift = function () {
    //crear una variable con el valor de la primera posicion
    var days = this[0]

    for (var i = 0; i < this.length - 1; i++) {

        //asignamos la posicion de i la siguiente
        this[i] = this[i + 1] // this[i++]
    }
    delete this[this.length - 1]
    this.length--
    return days
}

console.log('TEST Arroz.prototype.shift')

var daysOfTheWeek = new Arroz
daysOfTheWeek[0] = 'Monday'
daysOfTheWeek[1] = 'Tuesday'
daysOfTheWeek[2] = 'Wednesday'
daysOfTheWeek[3] = 'Thursday'
daysOfTheWeek[4] = 'Friday'
daysOfTheWeek[5] = 'Saturday'
daysOfTheWeek[6] = 'Sunday'
daysOfTheWeek.length = 7
var holiday = daysOfTheWeek.shift()
console.log('holiday -> ', holiday)
console.log('daysOfTheWeek -> ', daysOfTheWeek)
// [ 'Tuesday', 'Wednesday', Thursday', 'Friday, 'Saturday', 'Sunday' ]
