var Arroz = function () { this.length = 0 }

Arroz.prototype.filter = function (callbackFunction) {

    // crear un nuevo arroz
    var result = new Arroz
    // recorrer el objeto para verificar si cada elemento cumple la condición de la funcion
    for (var i = 0; i < this.length; i++) {
        if (callbackFunction(this[i])) {
            result[result.length] = this[i]
            result.length++
        }
    }
    // devolver el nuevo arroz
    return result

}



var numbers = new Arroz
numbers[0] = 0
numbers[1] = 1
numbers[2] = 2
numbers[3] = 3
numbers[4] = 4
numbers[5] = 5
numbers[6] = 6
numbers.length = 7

console.log('CASE 1: Discover pair numbers')

var pairnumbers = numbers.filter(function (number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
})

console.log(pairnumbers)