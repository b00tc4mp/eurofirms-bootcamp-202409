var Arroz = function () { this.length = 0 }


Arroz.prototype.reverse = function () {
    var guardar;
    var guardar2;
    for (var i = 1; i < this.length / 2; i++) {
        guardar = this[i]
        guardar2 = this[this.length - i]
        this[i] = guardar2
        this[this.length - i] = guardar
    }
    return this
}



console.log('TEST Arroz.prototype.reverse')

console.log('CASE in action')

var arroz = new Arroz

arroz[0] = 0
arroz[1] = 1
arroz[2] = 2
arroz[3] = 3
arroz[4] = 4
arroz[5] = 5
arroz.length = 6

console.log(arroz.reverse())
