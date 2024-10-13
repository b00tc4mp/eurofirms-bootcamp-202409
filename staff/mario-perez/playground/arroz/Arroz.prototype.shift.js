var Arroz = function () { this.length = 0 }



Arroz.prototype.shift = function () {
    var guardar
    if (this.length === 0) {
        return undefined
    } else {
        for (var i = 1; i < this.length; i++) {
            guardar = this[i]
            this[i + 1] = guardar
            console.log('Ahora el objeto es :', this)
        }
        //this.length--
    }
    return this[this.length - 1]
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
