var Arroz = function () { this.length = 0 }

Arroz.prototype.concat = function (element) { // objeto.concat() llamará a objeto.prototype.concat
    var nuevoArray = new Arroz
    // recorremos el objeto arroz con un for
    for (var i = 0; i < this.length; i++) {
        //metemos al final el elemento del arroz nuevo en la posicion i
        nuevoArray[i] = this[i]
        nuevoArray.length++
    }
    for (var i = 0; i < element.length; i++) {
        //metemos al final el elemento del arroz nuevo en la posicion i
        nuevoArray[nuevoArray.length] = element[i]
        nuevoArray.length++
    }
    return nuevoArray;
}
var arroz = new Arroz
var arroz2 = new Arroz

arroz2[0] = 0
arroz2.length = 1

arroz[0] = 0
arroz.length = 1








console.log('TEST Arroz.prototype.concat')

console.log("CASE return an new  Aroz with two arrays")

console.log('concat test new arroz2 despues de concatenar array', arroz.concat(arroz2))
// arroz = { 0: 0, 1: 1, 2: 2 , length : 1}