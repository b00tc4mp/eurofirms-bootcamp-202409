console.log('TEST Arroz.prototype.shift')

/* El método shift() elimina el primer elemento del array y lo retorna.
   Este método modifica la longitud del array.
   El método shift elimina el elemento en el índice cero y desplaza 
   los valores consecutivos hacia abajo, devolviendo el valor eliminado. 
   Si la propiedad length es 0, devuelve undefined. */

class Arroz {
    constructor() { this.length = 0 }

    shift() {
        // primero hay que crear una constiable con el valor de la primera posición para guardarlo
        let element = this[0]

        // recorremos el array asignando al 2ª valor la posición del 1º valor eliminado
        for (let i = 0; i < this.length - 1; i++) {
            this[i] = this[i + 1] // also this[i++]
        }
        // borramos el valor removido
        delete this[this.length - 1]
        this.length--
        return element

    }
}


console.log('CASE 1 -> Testing method shift with the list of week days')

const daysOfWeek = new Arroz();
daysOfWeek[0] = 'Monday'
daysOfWeek[1] = 'Tuesday'
daysOfWeek[2] = 'Wednesday'
daysOfWeek[3] = 'Thursday'
daysOfWeek[4] = 'Friday'
daysOfWeek[5] = 'Saturday'
daysOfWeek[6] = 'Sunday'
daysOfWeek.length = 7

console.log('Days of week before apply shift -> ', daysOfWeek)
// Arroz {0:'Monday', 1:'Tuesday', 2: 'Wednesday', 3:'Thursday', 4:'Friday', 5:'Saturday', 6:'Sunday', length: 7}
// length is 7

const elementRemoved = daysOfWeek.shift()

console.log('Element removed in shift method -> ', elementRemoved)
// Monday

console.log('Days of week after apply shift method -> ', daysOfWeek)

//Arroz { 0: 'Tuesday', 1: 'Wednesday', 2: 'Thursday', 3: 'Friday', 4: 'Saturday', 5: 'Sunday', length: 6 }
// length is 6

console.log('CASE 2 -> Testing method shift with a two-dimensional Arroz')

const days = new Arroz();
days[0] = ['Monday', 'Tuesday']
days[1] = ['Tuesday', 'Wednesday']
days[2] = ['Friday', 'Saturday']
days[3] = ['Sunday']
days.length = 4

console.log('Days of week before apply shift -> ', days)
// Arroz { 0:['Monday', 'Tuesday'], 1:['Wednesday', 'Thursday'], 2: ['Friday', 'Saturday'], 3: ['Sunday', length: 4]
// length is 4

const elementRemovedArr = days.shift()

console.log('Elements removed from Array -> ', elementRemovedArr);
// ['Monday', 'Tuesday']

console.log('Array returned after apply shift method -> ', days);
/*  Arroz {
            ['Wednesday', 'Thursday'],
            ['Friday', 'Saturday'],
            ['Sunday'], length = 3
        }
length is 3 
*/
