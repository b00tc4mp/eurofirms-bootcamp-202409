var Arroz = function () { this.length = 0 }

Arroz.prototype.indexOf = function (searchElement) {
    /*
    1-Encontrar searchElement en arroz;
    2-Iterar uno por uno elemnts hasta encontrarlo;
    3-Si lo encuentra, devolver la posición de ese elemento(el index);
    4-Si no lo encuentra, devolver -1;
    */

    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        if (element === searchElement) return i
    }

    return -1
}

console.log('TEST Arroz.prototype.indexOf')

console.log('CASE indexOf of bison')

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

console.log('CASE index of dress')

var clothes = new Arroz
clothes[0] = 'skirt'
clothes[1] = 'coat'
clothes[2] = 'shirt'
clothes[3] = 'dress'
clothes[4] = 'jeans'
clothes.length = 5
var index = clothes.indexOf('dress')
console.log(index);
//3