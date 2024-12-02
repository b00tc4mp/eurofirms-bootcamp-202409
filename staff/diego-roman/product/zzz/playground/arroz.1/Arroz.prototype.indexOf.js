Arroz.prototype.indexOf = function(element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === element) return i
    }
    return -1
}

console.log('TEST Arroz.prototype.indexOf')

var fruits = new Arroz
fruits[0] = 'apple'
fruits[1] = 'banana'
fruits[2] = 'cherry'
fruits.length = 3
var index = fruits.indexOf('banana')
console.log(index)
// 1

var numbers = new Arroz
numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers.length = 4
var index = numbers.indexOf(50)
console.log(index)
// -1

var Arroz = function () { this.length = 0 }

Arroz.prototype.indexOf = function (searchElement, fromIndex) {
    // var i

    // if (fromIndex === undefined)
    //     i = 0
    // else if (fromIndex < 0)
    //     i = this.length + fromIndex
    // else
    //     i = fromIndex

    for (var i = (fromIndex === undefined ? 0 : (fromIndex < 0 ? this.length + fromIndex : fromIndex)); i < this.length; i++) {
        var element = this[i]

        if (element === searchElement) return i
    }

    return -1
}

console.log('TEST Array.prototype.indexOf')

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
// 1

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
// 4

console.log('CASE get index of giraffe')

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

console.log('CASE get index of giraffe starting at offset -4')

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

console.log('CASE get index of duck starting at offset -4')

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

console.log('CASE get index of duck starting at offset -3')

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