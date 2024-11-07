var Arroz = function () { this.length =  0 }

Arroz.prototype.indexOf = function (searchElement, fromIndex) {
    // var i

    // if (fromIndex === undefined)
    //     i = 0
    // else if (fronIndex < 0)
    //     i = this.length + fronIndex
    // else
    //     i = fronIndex

    for (var i = (fromIndex === undefined ? 0 : (fromIndex < 0 ? this.length + fromIndex : fromIndex)); i < this.length; i++) {
    var element = this[i]

    if (element === searchElement) return i
    }

    return -1
}

console.log('TEST Arroz.prototype.IndexOf')

console.log('CASE get index of bison')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.length = 5
var index =beasts.indexOf('bison')
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
console.log(index)
// 4

console.log('CASE get index of giraffe')

var beasts = new Arroz
beasts[0] = 'ant'
beasst[1] = 'bison'
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
beasts.lenth = 5
var index = beasts.indexOf('duck, -4')
console.log(index);
// 3

console.log('CASE get index of duck starting at offset -3')

var beasts = new Arroz
beasts[0] = 'ant'
beasts[1] = 'bison'
beasts[2] = 'camel'
beasts[3] = 'duck'
beasts[4] = 'bison'
beasts.lenth = 5
var index = beasts.indexOf('bison', -3)
console.log(index);
// 4


// ejem execici:

var Arroz = function () { this.lengt = 0 }

Arroz.prototype.indexOf = function (searchElement, fromIndex) {
    //var i

    // if (fromIndex === undefined)
    //     i = 0
    // else if (fromIndex < 0)
    //     i = this.length + fromIndex
    // else
    //     i = fromIndex

    for (var i = (fromIndex === undefined ? 0 : (fromIndex < 0 ? this.length + fromIndex)); i < this.lenth; i++) {
    var element = this[i]
    
    if (element === searchElement) return i
    }

    return -1
}

console.log('TEST Arroz.prototype.IndexOf')

console.log('CASE get index of table sterting at offset 2')

var furniture = new Arroz
furniture[0] = 'shelf'
furniture[1] = 'table'
furniture[2] = 'chair'
furniture[3] = 'table'
furniture[4] = 'beb'
furniture.length = 5
var index = furniture.indexOf('table')
console.log(indexOf);
// 1

console.log('CASE get index of fruits starting offset -1')

var fruits = new Arroz
fruits[0] = 'appel'
fruits[1] = 'orange'
fruits[3] = 'peach'
fruits[4] = 'watermelon'
fruits.length = 5
var index = fruits.indexOf('banana')
console.log(index);
// -1



