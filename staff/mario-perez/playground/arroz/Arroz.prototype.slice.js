var Arroz = function () { this.length = 0 }

Arroz.prototype.slice = function (start, end) {
    //devuelve una parte del array dentro de uno nuevo empezando por inicio hasta fin (fin no incluido).
    var segmento = []
    var total = end - start
    //var contador = 0
    for (var i = 0; i < total; i++) {
        segmento[i] = this[start + i]
        //contador++
    }
    return segmento
}

console.log('TEST Arroz.prototype.slice')

console.log('CASE  parameters is 1 and 4')

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


console.log('CASE  parameters is 2 and 7')

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




