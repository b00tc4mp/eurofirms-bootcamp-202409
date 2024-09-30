var Arroz = function () { this.length = 0 }

Arroz.prototype.indexOf = function (element) { // objeto.indexOf() llamará a objeto.prototype.indexOf
    // recorremos el objeto arroz con un for
    for (var i = 0; i < this.length; i++) {
        // si element corresponde con el elemento de la posicion i devolvemos i
        //
        // si no lo encuentra en el objeto retorna -1
        if (element === this[i]) {
            return i
        }
    }
    return -1

}
var arroz = new Arroz

arroz[0] = 1
arroz[1] = 1
arroz[2] = 2
arroz[3] = 3
arroz[4] = 1
arroz[5] = 3
arroz.length = 6


console.log('TEST Arroz.prototype.indexOf')

console.log("CASE return the first position of element in parameter's function, or -1 if don't exist this")

console.log(arroz.indexOf(1))
// 1
console.log(arroz.indexOf(3))
// 0
console.log(arroz.indexOf(8))
// -1











