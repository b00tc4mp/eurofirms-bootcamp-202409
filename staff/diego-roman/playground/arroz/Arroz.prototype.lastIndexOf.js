Arroz.prototype.lastIndexOf = function(element) {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] === element) return i
    }
    return -1
}

console.log('TEST Arroz.prototype.lastIndexOf')

var numbers = new Arroz
numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers[4] = 10
numbers.length = 5
var lastIndex = numbers.lastIndexOf(10)
console.log(lastIndex)
// 4
