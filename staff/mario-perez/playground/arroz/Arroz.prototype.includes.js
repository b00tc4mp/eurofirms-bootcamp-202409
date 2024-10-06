var Arroz = function () { this.length = 0 }

Arroz.prototype.includes = function (element) { // objeto.includes() llamará a objeto.prototype.includes
    //recorremos el objeto arroz con un for
    for (var i = 0; i <= this.length; i++) {
        if (this[i] === element) {
            return true;
        } else {
            if (i === this.length) {
                return false;
            }
        }
    }
}

console.log('TEST Arroz.prototype.at')

console.log('CASE  parameter is 2')

var arroz = new Arroz

arroz[0] = 0
arroz[1] = 1
arroz[2] = 2
arroz[3] = 3
arroz[4] = 4
arroz[5] = 5
arroz.length = 6

console.log(arroz.includes(2))
//true

console.log('CASE  parameter is 6')

var arroz = new Arroz

arroz[0] = 0
arroz[1] = 1
arroz[2] = 2
arroz[3] = 3
arroz[4] = 4
arroz[5] = 5
arroz.length = 6

console.log(arroz.includes(6))
//false

console.log('CASE  parameter is 110')

var arroz = new Arroz

arroz[0] = 0
arroz[1] = 1
arroz[2] = 2
arroz[3] = 3
arroz[4] = 4
arroz[5] = 5
arroz.length = 6

console.log(arroz.includes(110))
// false