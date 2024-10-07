var Arroz = function () { this.length = 0 }

Arroz.prototype.concat = function (arroz) { // objeto.contact() llamará a objeto.prototype.concat
    // recorremos el objeto arroz con un for
    for (var i = 0; i < arroz.length; i++) {
        //metemos al final el elemento del arroz nuevo en la posicion i
        this[i] = arroz[i]
        this.length++
    }
    return this
}
var arroz = new Arroz
var arroz2 = new Arroz

arroz2[0] = 0
arroz2.length = 1






console.log('TEST Arroz.prototype.concat')

console.log("CASE return an new  Aroz with two arrays")

console.log('concat test new arroz2 despues de concatenar array', arroz.concat(arroz2))
// arroz = { 0: 0, 1: 1, 2: 2 , length : 1}