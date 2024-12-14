var Arroz = function () { this.length = 0 }

Arroz.prototype.indexOf = function (searchElement, fromIndex) {
    var i

    if (fromIndex === undefined)
        i = 0
    else if (fromIndex < 0)
        i = this.length + fromIndex
    else
        i = fromIndex

    for (; i < this.length; i++) {
        var element = this [i]

        if (element === searchElement) return i
    } 
    
    return -1
}

console.log('TEST Arroz.prototype. indexOf')

console.log('CASE get index of bison')

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

console.log('CASE get index of bison starting at index 2')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts.indexOf('bison', 2)
console.log(index);
// 4n

console.log ('CASE get indexof giraffe')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts.indexOf('giraffe')
console.log(index);
// -1

console.log ('CASE get indexof giraffe starting at offset -4')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts.indexOf('giraffe', -4)
console.log(index);
// -1

console.log ('CASE get indexof duck starting at offset -4')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts.indexOf('duck', -4)
console.log(index);
// 3

console.log ('CASE get indexof bison starting at offset -3')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index = beasts.indexOf('bison', -3)
console.log(index);
// 4