var Arroz = function () { this.length = 0 }

Arroz.prototype.fill = function (value, start, end) {
    //consideramos las opciones y ponemos los valores de i
    if (start === undefined) {
        start = 0
    }
    if (end === undefined) {
        end = this.length
    }

    console.log(value, start, end)

    for (var i = start; i < end; i++) {
        this[i] = value
    }
    return this
}

console.log('TEST Arroz.prototype.fill')

console.log('CASE whith 1 parameter')

var arroz = new Arroz

arroz[0] = 0
arroz[1] = 1
arroz[2] = 2
arroz[3] = 3
arroz[4] = 4
arroz[5] = 5
arroz.length = 6

console.log(arroz.fill(0))
// arroz {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, length = 6 }

console.log('CASE whith 2 parameters')

var arroz = new Arroz

arroz[0] = 0
arroz[1] = 1
arroz[2] = 2
arroz[3] = 3
arroz[4] = 4
arroz[5] = 5
arroz.length = 6

console.log(arroz.fill(9, 3))
// arroz {0: 0, 1: 0, 2: 2, 3: 9, 4: 9, 5: 9, length = 6 }

console.log('CASE whith 3 parameters')

var arroz = new Arroz

arroz[0] = 0
arroz[1] = 1
arroz[2] = 2
arroz[3] = 3
arroz[4] = 4
arroz[5] = 5
arroz.length = 6

console.log(arroz.fill(9, 3, 4))
// arroz {0: 0, 1: 1, 2: 2, 3: 9, 4: 9, 5: 5, length = 6 }
