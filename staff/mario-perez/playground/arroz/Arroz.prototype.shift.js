var Arroz = function () { this.length = 0 }



Arroz.prototype.shift = function () {
    var guardar = this[0]
    for (var i = 1; i < this.length; i++) {
        this[i] = this[i + 1]
    }
    delete this[this.length - 1]
    this.length--
    return guardar
}


console.log('TEST Arroz.prototype.shift')

console.log('CASE in action and show length')

var arroz = new Arroz

arroz[0] = 0
arroz[1] = 1
arroz[2] = 2
arroz[3] = 3
arroz[4] = 4
arroz[5] = 5
arroz.length = 6

console.log(arroz.shift())
//true

console.log(arroz.length)
