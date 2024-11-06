var Arroz = function () { this.length = 0 }

Arroz.prototype.indexOf = function (searchElement, fromIndex) {
    if (fromIndex === undefined) {
        /* 1.Buscar searchelement en Arroz
        2.Iterar element hasta encontrar el searchElement
        3-Si lo encontramos, entonces devolvemos la posición de ese elemento.
        4.Si no lo encuentra, devuelve -1. */

        

        for (var i = 0; i < this.length; i++) {
            var element = this[i]

            if (element === searchElement) return i
        }
        return -1
    } else {
        for (var i = fromIndex; i < this.length; i++) {
            var element = this[i]


            if (element === searchElement) return i

        }
        return -1
    }

}
console.log('TEST Arroz.prototype.indexOf')

console.log('CASE get indexOf bison')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts.indexOf('bison')
console.log(index);
//1

console.log('CASE index of bison starting at index 2')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts.indexOf('bison', 2)
console.log(index);
//4


console.log('CASE index of giraffe')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts.indexOf('giraffe')
console.log(index);
//-1


