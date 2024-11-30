console.log('TEST Arroz.prototype.indexOf')


class Arroz {
    constructor() { this.length = 0 }

    indexOf(element) {
        //retornar el primer índice en el que encuentre el elemento
        //si no lo encuentro retorno -1
        //comprobar si las posiciones son el elemento que queremos buscar
        for (let i = 0; i < this.length; i++) {
            if (element === this[i])
                return i // retornamos la primera posición donde se encontró

        }
        return -1
    }
}

console.log('CASO 1: encontrar a oscar y devolver su posición en students')

const students = new Arroz();
students[0] = 'luis f'
students[1] = 'mario'
students[2] = 'oscar'
students[3] = 'rosana'
students[4] = 'herminia'
students[5] = 'roberto'
students[6] = 'efren'
students[7] = 'mario'
students[8] = 'tea'
students.length = 9

console.log('CASO 1: encontrar a oscar y devolver su posición en students')

console.log('primera posición de oscar ->', students.indexOf('oscar'))
//expected result -> 2

console.log('CASO 2: encontrar a joserra en students')

console.log('primera posición de joserra ->', students.indexOf('joserra'))
// expected result -> -1 // significa que no está en el listado

console.log('CASO 3: buscar a mario en students')

console.log('primera posición de mario ->', students.indexOf('mario'))
//expected result -> 1 <- aunque esté repetido como la posición es 1 el resultado esperado es 1

