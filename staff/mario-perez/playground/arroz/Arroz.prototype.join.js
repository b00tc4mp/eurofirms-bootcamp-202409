var Arroz = function () { this.length = 0 }

Arroz.prototype.join = function (separator = ", ") { // objeto.join() llamará a objeto.prototype.join
    //separator es el parametro opcional
    var values = '';
    //recorremos el objeto arroz con un for
    for (var i = 0; i < this.length; i++) {
        if (i == this.length - 1) { //i es la última posición
            values += this[i]
        } else {
            values += this[i] + separator // como hay más elementos por delante, pongo separator para separarlos
        }
    }
    return values //devuelvo la cadena
}

var arroz = new Arroz

arroz[0] = 0
arroz[1] = 1
arroz[2] = 2
arroz[3] = 3
arroz[4] = 4
arroz[5] = 5
arroz.length = 6

console.log('TEST Arroz.prototype.join')

console.log("CASE return a string with all elements of a object")

console.log(arroz.join())
// "1,2,3,4,5"

console.log(arroz.join(''));
// "12345"

console.log(arroz.join('-'));
// "1-2-3-4-5"

console.log(arroz.join('//'))
// 1//2//3//4//5