var Arroz = function () { this.length = 0 }

Arroz.prototype.lastIndexOf = function (element) { // objeto.includes() llamará a objeto.prototype.lastIndexOf
    //recorremos el objeto arroz con un for
    for (var i = this.length; i >= 0; i--) {
        if (this[i] === element) {
            return i;
        }
    }
    return -1;
}


var arroz = new Arroz

arroz[0] = 0
arroz[1] = 5
arroz[2] = 5
arroz[3] = 0
arroz[4] = 4
arroz[5] = 0
arroz.length = 6


console.log('TEST Arroz.prototype.lastIndexOf')

console.log("CASE return the last position of element in parameter's function, or -1 if don't exist this")

console.log(arroz.lastIndexOf(300))
// -1

console.log(arroz.lastIndexOf(5))
// 2

console.log(arroz.lastIndexOf(0))
// 5