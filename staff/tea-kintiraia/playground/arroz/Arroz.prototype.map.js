var Arroz = function () { this.length = 0 }

Arroz.prototype.map = function (callBackFunction) {
    //crear un array -> result
    var result = []
    //recorrer cada elemento del objeto y aplucar la callbackFunction
    for (var i = 0; i < this.length; i++) {
        // por cada elemento añadir a 'result' el valor retornado por callBackFunction result[result.length] = callBackFunction(this[i])
    }
    //devuelve result
    return result

}

var numbers = new Arroz

numbers[0] = 0
numbers[1] = 1
numbers[2] = 2
numbers[3] = 3
numbers.length = 4

var doubles = numbers.map(function (number) { return number * 2 })

console.log('numbers ->', numbers)

console.log('CASE 1 -> multiply each number by 2 ->, doubles')

