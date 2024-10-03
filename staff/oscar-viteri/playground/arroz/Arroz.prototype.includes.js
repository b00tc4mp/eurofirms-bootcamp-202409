var Arroz = function () { this.length = 0 }

Arroz.prototype.includes = function (element) {
    /*
    verificar si existe un elemento en arroz
*/
    for (var i = 0; i < this.length; i++) {
        if (this[i] === element) {
            return true; //retorna true si se encuentra el elemento
        }
    }
    return false; //retorna false si no se encuentra el elemento
}

var fruits = new Arroz
fruits[0] = 'apple'
fruits[1] = 'banana'
fruits[2] = 'orange'
fruits[3] = 'grape'
fruits[4] = 'mango'
fruits[5] = 'pineapple'
fruits.length = 6 // longitud del Arroz

console.log('true si se encuentra el elemento->', fruits.includes('banana'))
//true
console.log('false si no se encuentra el elemento->', fruits.includes('kiwi'))
//false