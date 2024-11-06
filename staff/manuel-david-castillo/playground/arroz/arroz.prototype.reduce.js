var Arroz = function () { this.length = 0 }

Arroz.prototype.reduce = function (callBack, inititialValue) {
    var result;
    var index;
    if (inititialValue === undefined) {
        result = this[0]
        index = 1;
    } else {
        result = inititialValue
        index = 0;
    }

    for (var i = index; i < this.length; i++) {
        result = callBack(result, this[i])
    }

    return result
}

var coches = new Arroz

coches[0] = "Mercedes Benz cla"
coches[1] = "BMW X5"
coches[2] = "Seat Ibiza"
coches[3] = "Lamborguini Aventador"
coches[4] = "Ferrari Enzo"
coches[5] = "Porche Callena"

coches.length = 6;

console.log(coches)

console.log("CASE1 concat all the cars")
var unirCoches = function (accumulator, currentValue) {
    return accumulator + " " + currentValue + ","
}
var todosCoches = coches.reduce(unirCoches, "Estos son todos los coches: ")
console.log(todosCoches)

console.log("CASE2 sum all the numbers")
var numbers = new Arroz

numbers[0] = 2
numbers[1] = 3
numbers[2] = 4
numbers[3] = 5
numbers[4] = 6
numbers[5] = 7
numbers[6] = 8
numbers[7] = 9
numbers[8] = 10

numbers.length = 9;

console.log(numbers)
var sumNums = function (accumulator, currentValue) {
    return accumulator + currentValue
}
var allNumbers = numbers.reduce(sumNums)
console.log(allNumbers)
