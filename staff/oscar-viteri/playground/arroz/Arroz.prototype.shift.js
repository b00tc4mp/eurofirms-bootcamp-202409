var Arroz = function () { this.length = 0 }

Arroz.prototype.shift = function () {
    //Quita un elemento de un array
    //crear un array
    var i
    //recorrer el objeto
    for (var i = 0; i < this.lenght; i++) {
        //quita el elemento
        delete this[this.length - 1]
        //devolver el resultado en otro array
        this.length--
        return -1
    }
}
console.log('TEST Arroz.prototype.shift')

var daysOfTheWeek = new Arroz
daysOfTheWeek[0] = 'Monday'
daysOfTheWeek[1] = 'Tuesday'
daysOfTheWeek[2] = 'Wednesday'
daysOfTheWeek[3] = 'Thursday'
daysOfTheWeek[4] = ' Friday'
daysOfTheWeek[5] = 'Saturday'
daysOfTheWeek[6] = 'Sunday'
daysOfTheWeek.length = 7
var holiday = daysOfTheWeek.shift()
console.log(holiday)
console.log(daysOfTheWeek)
