class Arroz {
    constructor() { this.length = 0 }

    shift() {
        //crear una variable con el valor de la primera posicion
        const days = this[0]

        for (let i = 0; i < this.length - 1; i++) {

            //asignamos la posicion de i la siguiente
            this[i] = this[i + 1] // this[i++]
        }
        delete this[this.length - 1]
        this.length--
        return days
    }
}

console.log('TEST Arroz.prototype.shift')

{
    const daysOfTheWeek = new Arroz
    daysOfTheWeek[0] = 'Monday'
    daysOfTheWeek[1] = 'Tuesday'
    daysOfTheWeek[2] = 'Wednesday'
    daysOfTheWeek[3] = 'Thursday'
    daysOfTheWeek[4] = 'Friday'
    daysOfTheWeek[5] = 'Saturday'
    daysOfTheWeek[6] = 'Sunday'
    daysOfTheWeek.length = 7
    const holiday = daysOfTheWeek.shift()
    console.log('holiday -> ', holiday)
    console.log('daysOfTheWeek -> ', daysOfTheWeek)
    // [ 'Tuesday', 'Wednesday', Thursday', 'Friday, 'Saturday', 'Sunday' ]
}