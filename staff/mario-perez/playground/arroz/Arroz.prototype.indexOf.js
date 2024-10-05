var Arroz = function () { this.length = 0 }

Arroz.prototype.indexOf = function (element, fromIndex) { // objeto.indexOf() llamará a objeto.prototype.indexOf
    // recorremos el objeto arroz con un for
    if (fromIndex === undefined) {
        console.log('No se envía fromIndex')
        for (var i = 0; i < this.length; i++) {
            // si element corresponde con el elemento de la posicion i devolvemos i
            // si no lo encuentra en el objeto retorna -1
            if (element === this[i]) {
                return i
            }
        }
        return -1
        //fromIndex es el indice desde donde busca (parametro opcional)
    } else if (fromIndex >= this.length) {
        return -1
    } else if (fromIndex < 0) {
        var value = this[this.length + fromIndex]
        if (value > 0) {
            for (var i = this[this.length + fromIndex]; i < this.length; i++) {
                if (element === this[i]) {
                    return i
                }
            }
            return -1
        } else if (value < 0)
            console.log('value es menor que 0')
        for (var i = this.length; i >= 0; i--) {
            if (element === this[i]) {
                return i
            }
        }
        return -1
    }
}


var arroz = new Arroz

arroz[0] = 1
arroz[1] = 3
arroz[2] = 2
arroz[3] = 3
arroz[4] = 1
arroz[5] = 5
arroz.length = 6


console.log('TEST Arroz.prototype.indexOf')

console.log("CASE return the first position of element in parameter's function, or -1 if don't exist this")

console.log(arroz.indexOf(1))
// 0
console.log(arroz.indexOf(3))
// 1
console.log(arroz.indexOf(8))
// -1



//parametro opcional

console.log(arroz.indexOf(1, -6)) // 0

console.log(arroz.indexOf(0, -666)) // -1

console.log(arroz.indexOf(5, -2)) // 5











