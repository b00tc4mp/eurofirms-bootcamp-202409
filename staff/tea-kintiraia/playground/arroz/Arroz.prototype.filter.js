var Arroz = function () { this.length = 0 }

Arroz.prototype.filter = function (callbackFinction) {

    // crear Arroz;
    // recorer el objeto para verificar si cada elemento cumple la condición de la función;
    //devolver el nuevo arroz

var result = new Arroz
for ( var i = 0; i < this.length; i++) {
    if (callbackFinction(this[i])) {
        result[result.length] = this[i]
        result.length++
    }
}
return result
}

var numbers = new Arroz
numbers[0] = 0
numbers[1] = 10
numbers[2] = 21
numbers[3] = 30
numbers[4] = 41
numbers[5] = 50
numbers[6] = 61
numbers.length = 7

console.log('CASE 1: Discover pair numbers')

var pairnumbers = numbers.filter(function(number) {
    if (number % 2 === 0) {
        return true
    }else {
        return false
    }
})

console.log(pairnumbers)

//El resultado esperado: {0: 0, 1: 10, 2: 30, 3: 50, length: 4}