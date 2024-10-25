var Arroz = function () { this.length = 0 }

Arroz.prototype.filter = function (callbackfunction) {
    // crear un nuevo arroz
    var result = new Arroz
    // recorrer el objeto para verificar si cada elemento cumple la condicion de la funcion
    for (var i = 0; i < this.length; i++) {
        // devolver el nuevo arroz
        if (callbackfunction(this[i])) {
            result[result.length] = this[i]
            result.length++
        }
    }
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

var pairnumbers = numbers.filter(function (number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
})
console.log(pairnumbers)