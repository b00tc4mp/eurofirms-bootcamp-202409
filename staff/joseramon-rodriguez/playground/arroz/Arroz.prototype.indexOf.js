var Arroz = function () { this.length = 0 }

Arroz.prototype.indexOf = function (element) {
    // retornar el primer indice en el que encuentre  el elemento
    // si no lo encuentro retorno -1
    // comprobar si las posiciones son el elemento que queremos buscar
    for (var i = 0; i < this.length; i++) {
        if (element === this[i])
            return i//retornamos la primera posicion donde se encontro
    }
    return -1
}

var students = new Arroz

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

console.log('CASO 1: encontrar a oscar y devolver su posicion en students')

console.log('primera posicion de oscar', students.indexOf('oscar'))
//resultado esperado ->2<-

console.log('CASO 2: encontrar a joserra en students')

console.log('primera posicion de joserra', students.indexOf('joserra'))
//resultado esperado ->-1<- como no esta deberia de ser -1

console.log('CASO 3: buscar a mario en students')

console.log('primera posicion de mario', students.indexOf('mario'))
//resultado esperado ->0<- aunque este repetido como la posicion es 0
//el resultado esperado es ->0<-- 
