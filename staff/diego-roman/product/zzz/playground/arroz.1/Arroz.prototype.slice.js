Arroz.prototype.slice = function(start, end) {
    var result = new Arroz
    for (var i = start; i < end; i++) {
        result[result.length] = this[i]
        result.length++
    }
    return result;
}

console.log('TEST Arroz.prototype.slice')

var numbers = new Arroz
numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
numbers[3] = 4
numbers[4] = 5
numbers.length = 5

var sliced = numbers.slice(1, 4)
console.log(sliced)
// Arroz { 0: 2, 1: 3, 2: 4, length: 3 }
