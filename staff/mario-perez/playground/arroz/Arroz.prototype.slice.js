/*
El método slice() devuelve una parte del array dentro de uno nuevo 
empezando por inicio hasta fin (fin no incluido).

Con un índice negativo, fin indica un desplazamiento desde el final de la secuencia.

Si fin es mayor a la longitud del array, slice extrae hasta el final de la secuencia(arr.length).

Si fin es omitido, slice extrae hasta el final de la secuencia(arr.length).
*/

var Arroz = function () { this.length = 0 }

Arroz.prototype.slice = function (start, end) {
    var segmento = new Arroz
    if (end === undefined || end > this.length) {
        end = this.length
        for (var i = start; i < end; i++) {
            segmento[segmento.length] = this[i]
            segmento.length++
        }
    } else {
        if (end < 0) {
            for (var i = this.length - 1; i >= start; i--) {
                segmento[segmento.length] = this[i]
                segmento.length++
            }
        } else {
            for (var i = start; i < end; i++) {
                segmento[segmento.length] = this[i]
                segmento.length++
            }
        }
    }
    return segmento
}

console.log('TEST Arroz.prototype.slice')

console.log('CASE parameters is 1 and 4')

var arroz = new Arroz

arroz[0] = 0
arroz[1] = 1
arroz[2] = 2
arroz[3] = 3
arroz[4] = 4
arroz[5] = 5
arroz[6] = "Taenla"
arroz[7] = "Jocker"
arroz.length = 8

console.log(arroz.slice(1, 4))
// Arroz { '0': 1, '1': 2, '2': 3, length: 3 }

console.log('CASE parameters is 2 and 7')

var arroz = new Arroz

arroz[0] = 0
arroz[1] = 1
arroz[2] = 2
arroz[3] = 3
arroz[4] = 4
arroz[5] = 5
arroz[6] = "Taenla"
arroz[7] = "Jocker"
arroz[8] = "AAAAA"
arroz.length = 9

console.log(arroz.slice(2, 7))
//Arroz { '0': 2, '1': 3, '2': 4, '3': 5, '4': 'Taenla', length: 5 }


console.log('CASE one parameter')

var arroz = new Arroz

arroz[0] = 0
arroz[1] = 1
arroz[2] = 2
arroz[3] = 3
arroz[4] = 4
arroz[5] = 5
arroz[6] = "Taenla"
arroz[7] = "Jocker"
arroz[8] = "AAAAA"
arroz.length = 9

console.log(arroz.slice(2))
// [2, 3, 4, 5, "Taenla", "Jocker, "AAAAA"]

console.log('CASE the second parameter is longer than length of the object')

var arroz = new Arroz

arroz[0] = 0
arroz[1] = 1
arroz[2] = 2
arroz[3] = 3
arroz[4] = 4
arroz[5] = 5
arroz[6] = "Taenla"
arroz[7] = "Jocker"
arroz[8] = "AAAAA"
arroz.length = 9

console.log(arroz.slice(2, 12))
// [2, 3, 4, 5, "Taenla", "Jocker, "AAAAA"]

console.log('CASE the second parameter is negative')

var arroz = new Arroz

arroz[0] = 0
arroz[1] = 1
arroz[2] = 2
arroz[3] = 3
arroz[4] = 4
arroz[5] = 5
arroz[6] = "Taenla"
arroz[7] = "Jocker"
arroz[8] = "AAAAA"
arroz.length = 9

console.log(arroz.slice(2, -7))
// ["AAAAA", "Jocker", "Taenla", 5,  4, 3, 2]


