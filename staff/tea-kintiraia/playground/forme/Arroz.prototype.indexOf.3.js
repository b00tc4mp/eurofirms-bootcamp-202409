var Arroz = function () { this.length = 0 }

Arroz.prototype.indexOf = function (searchElement, fromIndex) {

    for (var i = 0; i < this.length; i++) {
        var element = this[i]
        if (fromIndex === undefined)
            i = 0
        else
            i = fromIndex
        for (var i = 0; i < this.length; i++) {
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


console.log('CASE indexOf bison starting at index 2')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts.indexOf('bison', 2);
console.log(index);
// 4


console.log('CASE get indexOf giraffe')

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
